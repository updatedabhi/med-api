import React from "react";
import { FiMail, FiHelpCircle, FiShield, FiFileText } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/images/drugs.png";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="MedsStore" className="h-10 w-10" />
            <span className="text-2xl font-bold text-green-600">MedsStore</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            MedsStore helps you order genuine medicines online and upload
            prescriptions securely for quick processing and doorstep delivery.
          </p>

          <div className="mt-5 flex items-center gap-3 text-gray-700">
            <FiMail className="text-green-600" />
            <span className="text-sm">support@medsstore.com</span>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Working Hours</h3>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>Monday – Saturday</li>
            <li>8:00 AM – 9:00 PM</li>
            <li className="text-gray-500">Sunday: Limited Support</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Services</h3>

          <ul className="text-sm text-gray-600 space-y-3">
            <li className="flex items-center gap-2">
              <FiFileText className="text-green-600" />
              Prescription Upload
            </li>
            <li className="flex items-center gap-2">
              <FiShield className="text-green-600" />
              Privacy Policy
            </li>
            <li className="flex items-center gap-2">
              <FiHelpCircle className="text-green-600" />
              Help & Support
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>

          <a
            href="#"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-green-500 text-green-600 hover:bg-green-600 hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MedsStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
