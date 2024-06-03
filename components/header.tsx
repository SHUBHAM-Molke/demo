"use client";

import { TextGenerateEffect } from "./ui/text";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ClickAwayListener from 'react-click-away-listener';
const words = `NJFC INDIA CHURCH`;
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" bg-gradient-to-r from-[#181a25] from-10%  to-[#040413] to-90% text-white">
     
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold flex items-center">
          <Link href="/">
            <img src="/files/logo.svg" alt="NJFC INDIA CHURCH" className="h-20 inline-block mr-2" />
            
            
          </Link>
          <TextGenerateEffect words={words} />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-white hover:bg-green-500 hover:p-2 hover:rounded-md hover:shadow-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-white hover:bg-green-500 hover:p-2 hover:rounded-md hover:shadow-md">
                Locations
              </Link>
            </li>
            
            <li>
              <Link href="/about" className="hover:text-white hover:bg-green-500 hover:p-2 hover:rounded-md hover:shadow-md">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:bg-green-500 hover:p-2 hover:rounded-md hover:shadow-md">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <ClickAwayListener onClickAway={() => setIsMobileMenuOpen(false)}>
          <nav className="md:hidden bg-gray-800">
            <ul className="flex flex-col space-y-4 py-4 px-6">
              <li>
                <Link href="/" className="hover:text-gray-300" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gray-300" onClick={toggleMobileMenu}>
                  Locations
                </Link>
              </li>
              
              <li>
                <Link href="/about" className="hover:text-gray-300" onClick={toggleMobileMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300" onClick={toggleMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </ClickAwayListener>
      )}
    </header>
  );
};

export default Header;
