import React from 'react';

const Login = () => {
  return (
    <div className="bg-[#2A30AB] text-white flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-semibold mb-2">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border-b border-gray-300 outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
