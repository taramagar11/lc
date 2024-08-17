import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#2A30AB] text-white flex flex-col justify-center items-center h-[50vh] text-center font-average-sans">
      <h1 className="text-2xl font-bold leading-snug mt-0 mb-4">
        Platform to bring students together <br />
        who share the same interests and passions
      </h1>
      <div className="flex items-center bg-white shadow-lg w-2/3 max-w-lg">
        <input
          type="text"
          placeholder="Search club"
          className="flex-grow p-4 text-gray-700 focus:outline-none bg-white border border-gray-300"
        />
        <button className="p-4 bg-white text-gray-700 border-l border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.2-6.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
