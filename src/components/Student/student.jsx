import React from 'react';
import { Link } from 'react-router-dom';
import Music from "../../assets/music.jpg";
import Politics from "../../assets/politics.jpg";
import Fashion from "../../assets/fashion.jpg";
import Vlogs from "../../assets/vlogs.jpg";
import Sports from "../../assets/sports.jpg";
import Art from "../../assets/art.jpg";

const Picks = () => {
  return (
    <div className="bg-[#2A30AB] text-white py-8 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Link to="/student">
          <p className="text-3xl font-bold mt-6 cursor-pointer hover:text-gray-300 transition-colors" style={{ fontFamily: 'Arial' }}>
            Student Picks
          </p>
        </Link>
        <div className="grid grid-cols-3 gap-6 mt-6 mx-4 sm:mx-8 lg:mx-16">
          <Link to="/music" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Music} alt="Music" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Music</p>
            </div>
          </Link>
          <Link to="/politics" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Politics} alt="Politics" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Politics</p>
            </div>
          </Link>
          <Link to="/fashion" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Fashion} alt="Fashion" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Fashion & Lifestyle</p>
            </div>
          </Link>
          <Link to="/vlogs" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Vlogs} alt="Vlogs" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Daily Dose & Vlogs</p>
            </div>
          </Link>
          <Link to="/sports" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Sports} alt="Sports" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Sports</p>
            </div>
          </Link>
          <Link to="/art" className="bg-[#6168CF] h-48 w-full flex items-center p-4">
            <img src={Art} alt="Art" className="h-32 w-32 mr-4" />
            <div className="text-white">
              <p className="text-lg">Arts</p>
            </div>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <a href="#" className="text-white cursor-pointer hover:text-gray-300 transition-colors font-bold">
            View More &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Picks;
