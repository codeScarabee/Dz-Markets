import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const OAuth = () => {
  return (
    <div>
      <button className="btn bg-red-500 font-bold w-full">
        <FcGoogle className="text-2xl mr-2 bg-white rounded-full" />
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default OAuth;
