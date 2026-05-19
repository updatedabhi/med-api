import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  FiSearch,
  FiLogIn,
  FiUserPlus,
  FiShoppingCart,
  FiBell,
  FiTruck,
  FiPlusCircle,
} from "react-icons/fi";
import logo from "../assets/images/drugs.png";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm("");
    }
  };
  const cartItems = useSelector((state) => state.cart.items || {});

  // total quantity in cart
  const cartCount = Object.values(cartItems).reduce(
    (sum, item) => sum + item.qty,
    0,
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔹 Prescription upload
  const fileInputRef = useRef(null);

  const handlePrescriptionUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    console.log("Prescription uploaded:", file);

    // 🔜 OCR FLOW (later)
    // 1. send file to backend OR OCR library
    // 2. extract text
    // 3. map medicines
  };

  // later replace with auth slice
  const isLoggedIn = false;

  return (
    <nav className="sticky top-0 z-50 bg-[#4CAF50]/80 backdrop-blur-lg shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <span className="font-bold text-xl text-gray-800">MedsStore</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-sm border">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="outline-none px-2 text-sm w-48"
          />
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700 text-xl">
          {/* Track Order */}
          <Link to="/track" className="hover:text-blue-600">
            <FiTruck />
          </Link>

          {/* Notifications */}
          <Link to="/notifications" className="relative hover:text-blue-600">
            <FiBell />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-blue-600">
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Upload Prescription */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="hover:text-purple-600"
            title="Upload Prescription"
          >
            <FiPlusCircle />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*,.pdf"
            onChange={handlePrescriptionUpload}
          />

          {/* Auth */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 text-white/90 font-medium hover:text-white text-sm border border-white/30 px-3 py-1.5 rounded-full hover:bg-white/10 transition"
              >
                <FiLogIn /> Login
              </Link>

              <Link
                to="/signup"
                className="flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-full hover:bg-gray-100 text-sm transition shadow-sm"
              >
                <FiUserPlus /> Signup
              </Link>
            </>
          ) : (
            <Link to="/profile" className="font-medium text-sm">
              My Account
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-6 flex flex-col gap-5">
            <button
              className="self-end text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>

            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="outline-none px-2 text-sm w-48"
            />

            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/track" onClick={() => setIsMenuOpen(false)}>
              Track Order
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>
            <Link to="/notifications" onClick={() => setIsMenuOpen(false)}>
              Notifications
            </Link>

            {/* Upload Prescription (Mobile) */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                fileInputRef.current.click();
              }}
              className="text-left"
            >
              Upload Prescription
            </button>

            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
