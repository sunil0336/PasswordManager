import React from 'react'

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex justify-between items-center fixed bottom-0 w-full p-2 px-6">
      <div className="font-bold text-m">
        Made by Sunil
      </div>

      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/sunil-rathod-18b1511b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-blue-700 rounded-full hover:bg-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/sunil0336"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-pink-500 rounded-full hover:bg-pink-400"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};


export default Footer