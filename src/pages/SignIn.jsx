import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import OAuth from '../components/OAuth';
import loginImg from '../assets/images/login-key.jpg';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [inputs, setInputs] = useState({});
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { email, password } = inputs;

  const handleChange = (e) => {
    const id = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Incorrect email or password.');
    }
  };
  return (
    <section className="flex justify-center items-center gap-5 flex-wrap max-w-7xl mx-auto min-h-screen">
      <div className="hidden md:block md:w-[70%] lg:w-[48%] rounded-2xl">
        <img src={loginImg} alt="login" className="rounded-2xl w-full" />
      </div>

      <div className="w-10/12 sm:w-10/12 md:w-[70%] lg:w-[48%] shadow-2xl rounded-2xl p-8">
        <h1 className="text-center text-2xl font-bold">
          Hello! <p>Welcome Back</p>
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="email" className=" inline-block text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email || ''}
              placeholder="Enter your email"
              id="email"
              autoFocus
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-md py-2 pl-10 w-full outline-none focus:border-blue-500"
            />
            <FaEnvelope className="absolute bottom-3 left-3 text-blue-500 text-xl" />
          </div>

          <div className="mb-4 relative">
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
              className="border-2 border-gray-400 rounded-md py-2 pl-10  w-full outline-none focus:border-blue-500"
            />
            {showPass ? (
              <FaEyeSlash
                className="absolute right-3 bottom-3 text-xl cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            ) : (
              <FaEye
                className="absolute right-3 bottom-3 text-xl cursor-pointer"
                onClick={() => setShowPass((prev) => !prev)}
              />
            )}
            <FaLock className="absolute bottom-3 left-3 text-blue-500 text-xl" />
          </div>
          <div className="flex justify-between items-center flex-wrap text-sm mb-4 font-semibold p-1">
            <p>
              Not registered yet?
              <span className="text-red-500 hover:text-red-600 hover:dark:text-red-400 ml-1">
                <Link to={'/sign-up'}>Create an account</Link>
              </span>
            </p>
            <Link to={'/forgot-password'} className="text-blue-500 hover:text-blue-600 hover:dark:text-blue-400">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn bg-blue-500 font-bold w-full mx-auto mb-2">
            Sign In
          </button>
          <div className="flex items-center mb-2 before:border-t before:flex-1 before:border-red-500 after:border-t after:flex-1 after:border-red-500">
            <p className="mx-1 font-bold text-lg text-center">OR</p>
          </div>
          <OAuth />
        </form>
      </div>
    </section>
  );
};

export default SignIn;
