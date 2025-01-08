import React, { useState } from "react";
import logo from "../assets/images/drugs.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex p-5 bg-[#59ea288e] justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-16 w-16 cursor-pointer" />
        <ul className="hidden md:flex ml-10 gap-10 font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>

      <a
        href="/login"
        className="hidden md:block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
      >
        Login/Signup
      </a>

      {/* Hamburger Menu for small and medium devices */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col gap-6 p-6">
            <button
              onClick={handleMenuToggle}
              className="text-xl self-end focus:outline-none"
            >
              ✕
            </button>
            <a href="/" className="text-lg cursor-pointer">
              Home
            </a>
            <a href="/About" className="text-lg cursor-pointer">
              About
            </a>
            <a href="/Contact" className="text-lg cursor-pointer">
              Contact
            </a>
            <a
              href="/login"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600"
            >
              Login/Signup
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
