import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import loginImg from '../assets/images/login-key.jpg';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(() => value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex justify-center items-center gap-5 flex-wrap max-w-7xl mx-auto h-screen">
      <div className="hidden md:block md:w-[70%] lg:w-[48%] rounded-2xl">
        <img src={loginImg} alt="login" className="rounded-2xl w-full" />
      </div>

      <div className="w-10/12 sm:w-10/12 md:w-[70%] lg:w-[48%] shadow-2xl rounded-2xl p-8">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className=" inline-block text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              id="email"
              autoFocus={true}
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-md py-2 pl-10 w-full outline-none focus:border-blue-500"
            />
            <FaEnvelope className="absolute bottom-3 left-3 text-blue-500 text-xl" />
          </div>
          <div className="flex justify-between items-center text-sm mb-4 font-semibold p-1">
            <p>
              Don't have an account?
              <span className="text-red-500 hover:text-red-600 hover:dark:text-red-400 ml-1">
                <Link to={'/sign-up'}>Register</Link>
              </span>
            </p>
            <Link to={'/sign-in'} className="text-blue-500 hover:text-blue-600 hover:dark:text-blue-400">
              Sign in instead
            </Link>
          </div>

          <button type="submit" className="btn bg-blue-500 font-bold w-full mx-auto mb-2">
            SEND RESET EMAIL
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

export default ForgotPass;
