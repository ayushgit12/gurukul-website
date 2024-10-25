import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import onlylogo from "../assets/onlylogo2.png";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between space-y-8 lg:space-y-0">
          
          {/* About Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Gurukul Research Foundation</h2>
            <p className="text-white text-sm">
             <img src={onlylogo} alt="logo" className="h-32" />
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-white space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-white text-sm mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-white text-sm mb-4">Email: info@gurukulresearch.com</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-blue-300 pt-6 text-center text-white text-sm">
          <p>© {new Date().getFullYear()} Gurukul Research Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
