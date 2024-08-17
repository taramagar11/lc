import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import C from "../../assets/c.png";
import Py from "../../assets/py.png";
import Java from "../../assets/java.png";
import Mp from "../../assets/mp.jpg";
import Dot from "../../assets/dot.png";
import Dsa from "../../assets/dsa.png";

const Clubs = () => {
  return (
    <div className="bg-[#2A30AB] text-white py-8 flex flex-col items-center">
      <div className="flex space-x-8">
        <Link to="/club">
          <h1 className="text-2xl font-bold underline cursor-pointer hover:text-gray-300 transition-colors" style={{ fontFamily: 'Arial' }}>
            Clubs
          </h1>
        </Link>
        <Link to="/topics">
          <h1 className="text-2xl font-bold underline cursor-pointer hover:text-gray-300 transition-colors" style={{ fontFamily: 'Arial' }}>
            Topics
          </h1>
        </Link>
      </div>
      <p className="text-3xl font-bold mt-6" style={{ fontFamily: 'Arial' }}>
        Recommended LearnClub
      </p>
      <div className="grid grid-cols-3 gap-6 mt-6 mx-4 sm:mx-8 lg:mx-16">
        <Link to="/c" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={C} alt="C" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">C Programming</p>
          </div>
        </Link>
        <Link to="/dot" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Dot} alt="Example" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">DOT NET Programming</p>
          </div>
        </Link>
        <Link to="/java" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Java} alt="Example" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Java Programming</p>
          </div>
        </Link>
        <Link to="/mp" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Mp} alt="Example" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Mobile Programming</p>
          </div>
        </Link>
        <Link to="/dsa" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Dsa} alt="Example" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">DSA</p>
          </div>
        </Link>
        <Link to="/python" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
          <img src={Py} alt="Example" className="h-32 w-32 mr-4" />
          <div className="text-white">
            <p className="text-lg">Python Programming</p>
          </div>
        </Link>
      </div>
      <div className="mt-8 flex justify-center">
        <a href="#" className="text-white cursor-pointer hover:text-gray-300 transition-colors font-bold">
          View More &gt;
        </a>
      </div>
    </div>
  );
}

export default Clubs;
