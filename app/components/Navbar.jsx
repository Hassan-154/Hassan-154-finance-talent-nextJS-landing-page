"use client"
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import navData from '../constant/navbar.json';
import Button from './Button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:justify-start lg:space-x-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-gray-900">LOGO</div>
          </div>

          {/* Navigation Menu - Shared HTML for both desktop and mobile */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:flex-1 lg:justify-center absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent border-t lg:border-t-0 border-gray-200 lg:border-none shadow-sm lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row lg:items-center px-2 py-2 lg:p-0 space-y-1 lg:space-y-0 lg:space-x-10">
              {navData.menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.link} 
                  className="text-gray-700 lg:text-gray-600 hover:text-gray-900 block lg:inline px-3 py-2 lg:p-0 text-base lg:text-sm font-medium lg:font-normal"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Buttons - Shared HTML for both desktop and mobile */}
          <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-3 absolute lg:relative top-80 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent border-t lg:border-t-0 border-gray-200 lg:border-none pt-4 lg:pt-0 pb-3 lg:pb-0 px-5 lg:px-0 shadow-sm lg:shadow-none z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-3">
              <button className="bg-gray-100 lg:bg-gray-50 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 lg:hover:bg-gray-100 transition-colors text-left lg:text-center border-0 lg:border lg:border-gray-200">
                Submit CV
              </button>
             <Button title="Find Your next Hire" className="bg-custom-bg" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <RiCloseLine className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <RiMenuLine className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;