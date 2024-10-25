import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMail, FiPhone } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full">
      <div className="container mx-auto px-4 py-4 justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
          //   className="w-12"
          />

        </div>
        <div className="hidden md:flex flex-col text-right">
          <p className="text-md flex items-center">
            <FiMail className="mr-2 text-blue-600" /> {/* Email Icon */}
            Email: rajuldwivedi@gurukulres.com
          </p>
          <p className="text-md flex items-center">
            <FiPhone className="mr-2 text-blue-600" /> {/* Phone Icon */}
            Phone: +91 77729 69347
          </p>
        </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-6 mt-8`}
        >
          <a
            href="/"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            HOME
          </a>
          <a
            href="/aboutus"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            ABOUT US
          </a>
          <a
            href="/services"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            SERVICES
          </a>
          <a
            href="/team"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            OUR TEAM
          </a>
          <a
            href="/projects"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            KEY PROJECTS
          </a>
          <a
            href="/clients"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            CLIENTELE
          </a>
          <a
            href="/careers"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            CAREERS
          </a>
          <a
            href="/training"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            TRAINING
          </a>
          <a
            href="/contact"
            className="text-black font-semibold hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-300"
          >
            CONTACT US
          </a>
        </nav>

        {/* Contact Information */}
      </div>

      {/* Mobile version contact details */}
      {isOpen && (
        <div className="block md:hidden px-4 py-2 bg-gray-50 text-sm">
          <p>Email: contact@geostructurals.com</p>
          <p>Phone: +91 88888 68327, 93880 80504</p>
        </div>
      )}
    </header>
  );
};

export default NavBar;
