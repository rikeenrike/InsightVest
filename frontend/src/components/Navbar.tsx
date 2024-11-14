import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-[70vw] h-[10vh] mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center justify-center'>
        {/* <img src="logo.png" alt="InsightVest.dev" className="h-10" /> */}
        <a href="/" className="text-2xl font-bold text-white">
          InsightVest.dev
        </a>
        </div>

        <div className="space-x-4">
          <a href="#resources" className="text-gray-200 hover:text-white">
            About
          </a>
          <a href="#about" className="text-gray-200 hover:text-white">
            Resources
          </a>
          <a href="#join" className="text-gray-200 hover:text-white">
            Contact Us
          </a>
          {/* <a href="#login" className="bg-white text-black px-3 py-1 rounded-md">
            Login
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;