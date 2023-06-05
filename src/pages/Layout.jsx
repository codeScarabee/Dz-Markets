import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import Darkmode from '../components/Darkmode';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function checkLocation(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <>
      <div className="flex items-center max-w-7xl mx-auto px-4 shadow-lg sticky top-0 z-50 bg-gray-500/20 mb-8">
        <label className="hover:bg-gray-200 btn border-none btn-circle swap swap-rotate bg-transparent">
          <input type="checkbox" />
          <svg className="swap-off  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg className="swap-on  " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <div className="flex-1" onClick={() => navigate('/')}>
          <img
            className="h-5 ml-3 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
          />
        </div>

        <nav className="mr-10 lg:w-[30%] md:w-[40%]">
          <ul className="flex items-center justify-center w-full">
            <li
              className={`cursor-pointer font-semibold hover:bg-gray-200 hover:text-red-500 transition-colors duration-500 ${
                checkLocation('/') && 'text-red-500 border-b-[2px] border-b-red-500'
              }`}
            >
              <Link to="/" className="inline-block py-3 px-5">
                Home
              </Link>
            </li>
            <li
              className={`cursor-pointer font-semibold hover:bg-gray-200 hover:text-red-500 transition-colors duration-500 ${
                checkLocation('/offers') && 'text-red-500 border-b-[2px] border-b-red-500'
              }`}
            >
              <Link to="/offers" className="inline-block py-3 px-5">
                Offers
              </Link>
            </li>
            <li
              className={`cursor-pointer font-semibold hover:bg-gray-200 hover:text-red-500 transition-colors duration-500 ${
                checkLocation('/sign-in') && 'text-red-500 border-b-[2px] border-b-red-500'
              }`}
            >
              <Link to="/sign-in" className="inline-block py-3 px-5">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <Darkmode />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
