import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import OAuth from '../components/OAuth';
import loginImg from '../assets/images/signup.jpg';

function SignUp() {
  const [inputs, setInputs] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);

  const navigate = useNavigate();
  const { username, email, password } = inputs;

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [id]: value.trim() }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (username && email && password) {
      if (isUserValid && isPassValid) {
        try {
          const auth = getAuth();
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          updateProfile(auth.currentUser, {
            displayName: username,
          });
          const user = userCredential.user;
          const inputsCopy = { ...inputs, timeStamp: serverTimestamp() };
          await setDoc(doc(db, 'users', user.uid), inputsCopy);
          navigate('/');
        } catch (error) {
          error.message.includes('(auth/invalid-email)') && toast.error('Invalid email address');
        }
      } else toast.error('Wrong username or password!');
    } else toast.error('All fields required and cannot be empty. Sign-up failed');
  }
  return (
    <>
      <section className="flex justify-center items-center gap-5 flex-wrap max-w-7xl mx-auto h-screen">
        <div className="hidden md:block md:w-[70%] lg:w-[48%] shadow-2xl rounded-2xl">
          <img src={loginImg} alt="login" className="rounded-2xl w-full h-full" />
        </div>

        <div className="w-10/12 sm:w-10/12 md:w-[70%] lg:w-[48%] shadow-2xl rounded-2xl p-8">
          <h1 className="text-center text-2xl font-bold">Sign up to DzMarkets</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className={isUserValid ? 'mb-4' : ''}>
              <label htmlFor="username" className=" inline-block text-sm font-bold mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username || ''}
                placeholder="Enter your username"
                id="username"
                autoFocus={true}
                onChange={handleChange}
                onBlur={() => (username && username.length > 2 ? setIsUserValid(true) : setIsUserValid(false))}
                className={
                  isUserValid
                    ? 'border-2 border-gray-400 rounded-md py-2 px-4  w-full outline-none focus:border-blue-500'
                    : 'border-2 border-red-500 rounded-md py-2 px-4  w-full outline-none focus:border-blue-500'
                }
              />
              {!isUserValid && <p className="text-xs text-red-500 p-1">Username must contain at least 3 characters</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className=" inline-block text-sm font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email || ''}
                placeholder="Enter your email"
                id="email"
                onChange={handleChange}
                className="border-2 border-gray-400 rounded-md py-2 px-4 w-full outline-none focus:border-blue-500"
              />
            </div>

            <div className={isPassValid ? 'relative mb-4' : 'relative'}>
              <label htmlFor="password" className="inline-block text-sm font-bold mb-1">
                Password
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                value={password || ''}
                placeholder="Enter your password"
                id="password"
                onChange={handleChange}
                onBlur={() => (password && password.length > 7 ? setIsPassValid(true) : setIsPassValid(false))}
                className={
                  isPassValid
                    ? 'border-2 border-gray-400 rounded-md py-2 px-4  w-full outline-none focus:border-blue-500'
                    : 'border-2 border-red-500 rounded-md py-2 px-4  w-full outline-none focus:border-blue-500'
                }
              />
              {showPass ? (
                <FaEyeSlash
                  className="absolute right-4 bottom-4 cursor-pointer"
                  onClick={() => setShowPass((prev) => !prev)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 bottom-4 cursor-pointer"
                  onClick={() => setShowPass((prev) => !prev)}
                />
              )}
            </div>
            {!isPassValid && (
              <p className="text-xs text-red-500 p-1 mb-2">Password must contain at least 8 characters</p>
            )}

            <div className="flex justify-between items-center text-sm mb-4 font-semibold p-1">
              <p>
                Already a member?
                <span className="text-sm text-red-500 hover:text-red-600 hover:dark:text-red-400 ml-1">
                  <Link to={'/sign-in'}>Log in</Link>
                </span>
              </p>
              <Link
                to={'/forgot-password'}
                className="text-sm text-blue-500 hover:text-blue-600 hover:dark:text-blue-400"
              >
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn bg-blue-500 font-bold w-full mx-auto mb-2">
              Sign Up
            </button>
            <p className="text-sm p-1">
              By clicking “Sign up”, you agree to our{' '}
              <Link to={'/'} className="text-blue-500 hover:text-blue-600">
                terms of service
              </Link>{' '}
              and acknowledge that you have read and understand our privacy policy.
            </p>
            <div className="flex items-center mb-2 before:border-t before:flex-1 before:border-red-500 after:border-t after:flex-1 after:border-red-500">
              <p className="mx-1 font-bold text-lg text-center">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
