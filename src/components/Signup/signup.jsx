import React from 'react';

const SignUp = () => {
  return (
    <div className="bg-[#2A30AB] text-white flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-lg font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-semibold mb-2">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
              required
            />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
