import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling
import C from "../../assets/c.png";
import Py from "../../assets/py.png";
import Java from "../../assets/java.png";
import Mp from "../../assets/mp.jpg";
import Dot from "../../assets/dot.png";
import Dsa from "../../assets/dsa.png";

const Club = () => {
  return (
    <div className="bg-[#2A30AB] text-white py-8 flex flex-col items-center">
      <div className="flex space-x-8 mb-8">
        <NavLink
          to="/club"
          className={({ isActive }) =>
            `text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors ${isActive ? 'underline' : ''}`
          }
          style={{ fontFamily: 'Arial' }}
        >
          Clubs
        </NavLink>
        <NavLink
          to="/topics"
          className={({ isActive }) =>
            `text-2xl font-bold cursor-pointer hover:text-gray-300 transition-colors ${isActive ? 'underline' : ''}`
          }
          style={{ fontFamily: 'Arial' }}
        >
          Topics
        </NavLink>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mt-6 mx-4 sm:mx-8 lg:mx-16">
        <NavLink to="/c" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={C} alt="C Programming" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">C Programming</p>
          </div>
        </NavLink>
        <NavLink to="/dot" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Dot} alt="DOT NET Programming" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">DOT NET Programming</p>
          </div>
        </NavLink>
        <NavLink to="/java" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Java} alt="Java Programming" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Java Programming</p>
          </div>
        </NavLink>
        <NavLink to="/mp" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Mp} alt="Mobile Programming" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Mobile Programming</p>
          </div>
        </NavLink>
        <NavLink to="/dsa" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Dsa} alt="DSA" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">DSA</p>
          </div>
        </NavLink>
        <NavLink to="/python" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Py} alt="Python Programming" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Python Programming</p>
          </div>
        </NavLink>
      </div>
      <div className="mt-8 flex justify-center">
        <a href="#" className="text-white cursor-pointer hover:text-gray-300 transition-colors font-bold">
          View More &gt;
        </a>
      </div>
    </div>
  );
}

export default Club;
