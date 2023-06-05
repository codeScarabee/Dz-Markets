import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import loginImg from '../assets/images/login-key.jpg';

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
    <section className="flex justify-center items-center gap-5 flex-wrap max-w-7xl mx-auto h-screen text-lg">
      <div className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-[48%] shadow-2xl rounded-2xl">
        <img src={loginImg} alt="login" className="rounded-2xl w-full" />
      </div>

      <div className="w-11/12 sm:w-11/12 md:w-11/12 lg:w-[48%] drop-shadow-lg shadow-2xl rounded-2xl">
        <form className="w-full p-8">
          <div className="mb-4">
            <label htmlFor="email" className=" inline-block text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
              className="border-2 border-gray-400 rounded-md py-2 px-4 w-full outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between mb-6 font-semibold">
            <p>
              Don't have an account?
              <span className="text-base text-red-500 hover:text-red-600 hover:dark:text-red-400 ml-1">
                <Link to={'/sign-up'}>Register</Link>
              </span>
            </p>
            <Link to={'/sign-in'} className="text-base text-blue-500 hover:text-blue-600 hover:dark:text-blue-400">
              Sign in instead
            </Link>
          </div>

          <button type="submit" onSubmit={handleSubmit} className="btn bg-blue-500 font-bold w-full mx-auto mb-2">
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
