import React from 'react';
import Logo from "../../assets/logo.png"; // Import the logo from the assets folder

const Getapp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#2A30AB]">
      <div className="text-center text-white">
        {/* Display the logo */}
        <img src={Logo} alt="Logo" className="mx-auto mb-6 w-24 h-auto" />
        
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      </div>
    </div>
  );
};

export default Getapp;
