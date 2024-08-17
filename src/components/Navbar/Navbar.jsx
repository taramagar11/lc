import React from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-950'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/* Logo and LearnClub Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" aria-label="Homepage" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10" />
            <span 
              style={{ 
                fontFamily: 'Matura MT Script Capitals', 
                fontSize: '32px', 
                fontWeight: '400'  // Regular weight
              }} 
              className="text-white ml-2"
            >
              LearnClub
            </span>
          </Link>
        </div>

        {/* Button Section */}
        <div className="flex space-x-4">
          <Link to="/login" className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-950 transition duration-300">
            Sign In
          </Link>
          <Link to="/signup" className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-950 transition duration-300">
            Sign Up
          </Link>
          <Link to="/getapp" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
            Get App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
