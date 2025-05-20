import React, { useState } from 'react';
import credpal from "../assets/Credpal.svg";
import { navLinks } from '../constants';
import Button from './Button';
import flag from "../assets/NaijaFlag.svg";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center mt-5 fixed z-40"> 
      {/* NAVBAR */}
      <nav className="h-[60px] flex items-center justify-between 
        px-6 md:px-6 
        rounded-full 
        bg-[#383737]
        relative
        z-50
        mx-16
        w-full "
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={credpal} alt="credpalogo" className="w-[40px] h-[40px]" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-5 justify-center w-2/3">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="text-white font-poppins text-[14px] font-normal hover:text-gray-300 cursor-pointer"
            >
              <a href="#" className="flex flex-row-reverse justify-center gap-1 items-center">
                {index === 0 && <IoIosArrowDown />}
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Flag + Button */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex justify-center items-center">
            <img src={flag} alt="flag" />
            <IoIosArrowDown className="text-white" />
          </div>
          <Button />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-white text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-white text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown + Blur Outside nav */}
      {menuOpen && (
        <>
          {/* Blur Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Dropdown Menu */}
          <div className="fixed top-[80px] left-30 right-2 
            bg-gradient-to-b from-[#18493d] to-[#1a1a1a] 
            rounded-xl p-6 flex flex-col gap-6 md:hidden 
            animate-slide-up z-50"
          >
            {navLinks.map((nav, index) => (
              <div
                key={nav.id}
                className="text-white text-lg font-semibold flex items-center gap-2"
              >
                {index === 0 && <IoIosArrowDown />}
                {nav.title}
              </div>
            ))}
            <div className="flex items-center gap-2">
              <img src={flag} alt="flag" className="w-6 h-6" />
              <IoIosArrowDown className="text-white" />
            </div>
          </div>
        </>
      )}

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-slide-up {
            animation: slideUp 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
