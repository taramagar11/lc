import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for internal routing
import { FaFacebookF, FaInstagram, FaTwitter, FaTumblr } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center mb-6 space-x-6">
          <NavLink 
            to="/getapp" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Get LearnClub
          </NavLink>
          <NavLink 
            to="/contact" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Contact
          </NavLink>
          <NavLink 
            to="/help" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Help Center
          </NavLink>
          <NavLink 
            to="/jobs" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Jobs
          </NavLink>
          <NavLink 
            to="/terms" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Terms of Service
          </NavLink>
          <NavLink 
            to="/privacy" 
            className="hover:text-gray-300 transition-colors text-lg font-semibold px-4 py-2"
          >
            Privacy
          </NavLink>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="https://www.instagram.com/yoursamosaa" 
            className="text-white hover:text-gray-300 transition-colors text-2xl p-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/taramagar63" 
            className="text-white hover:text-gray-300 transition-colors text-2xl p-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://twitter.com/taramagar" 
            className="text-white hover:text-gray-300 transition-colors text-2xl p-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.github.com/taramagar11" 
            className="text-white hover:text-gray-300 transition-colors text-2xl p-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTumblr />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
