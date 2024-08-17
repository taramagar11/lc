import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTumblr } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center mb-6 space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Get LearnClub</a>
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Contact</a>
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Help Center</a>
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Jobs</a>
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2">Privacy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-2xl p-2">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-2xl p-2">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-2xl p-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-2xl p-2">
            <FaTumblr />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
