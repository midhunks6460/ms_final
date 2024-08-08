"use client";
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { FaBars, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export type NAVBARType = {
  className?: string;
};

const NAVBAR: NextPage<NAVBARType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    if (isServicesOpen) {
      setIsServicesOpen(false); // Close Services dropdown if it's open
    }
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleServices = () => {
    if (isProductsOpen) {
      setIsProductsOpen(false); // Close Products dropdown if it's open
    }
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div
      className={`w-full flex flex-col items-start justify-start text-left text-lg md:text-xl lg:text-2xl text-[#212121] font-sans ${className}`}
    >
      <div className="w-full bg-[rgba(226,228,234,0.5)] flex flex-row items-center justify-between py-6 px-16 lg:px-24 md:px-6">
        <img
          className="w-32 h-12 object-cover"
          alt="Logo"
          src="/carcom-inc-logo@2x.png"
        />
        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-3xl cursor-pointer" />
        </div>
        {/* Navbar Links for large screens */}
        <div className="hidden md:flex flex-row items-center justify-start gap-8 text-lg lg:text-xl font-sans">
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <div className="relative group">
            <div
              className="flex flex-row items-center justify-center gap-2 cursor-pointer"
              onClick={toggleProducts}
            >
              <div>Products</div>
              <img className="w-2 h-2" alt="" src="/vector-4.svg" />
            </div>
            <div
              className={`sub-menu absolute top-full left-0 ${isProductsOpen ? "flex" : "hidden"} flex-col bg-[#e2e4ea] z-10 text-lg font-sans`}
            >
              <Link href="/product1" className="py-2 px-4 hover:bg-gray-300">
                Product 1
              </Link>
              <Link href="/product2" className="py-2 px-4 hover:bg-gray-300">
                Product 2
              </Link>
              {/* Add more products as needed */}
            </div>
          </div>
          <div className="relative group">
            <div
              className="flex flex-row items-center justify-start gap-2 cursor-pointer"
              onClick={toggleServices}
            >
              <div>Services</div>
              <img className="w-2 h-2" alt="" src="/vector-4.svg" />
            </div>
            <div
              className={`sub-menu1 absolute top-full left-0 ${isServicesOpen ? "flex" : "hidden"} flex-col bg-[#e2e4ea] z-10 text-lg font-sans`}
            >
              <Link href="/service1" className="py-2 px-4 hover:bg-gray-300">
                Service 1
              </Link>
              <Link href="/service2" className="py-2 px-4 hover:bg-gray-300">
                Service 2
              </Link>
              {/* Add more services as needed */}
            </div>
          </div>
          <Link href="/projects" className="text-black hover:text-gray-700">
            Projects
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700">
            About Us
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </div>
        {/* Social Media Icons */}
        <div className="hidden md:flex flex-row items-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-[#4267B2]" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-[#1DA1F2]" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-[#e33cbc]" />
          </a>
        </div>
      </div>
      {/* Dropdown menu for mobile/tablet screens */}
      {isMenuOpen && (
        <div className="flex flex-col md:hidden items-start justify-start py-4 px-6 gap-4 text-lg font-sans bg-[#e2e4ea] w-full">
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <div className="relative">
            <div
              className="flex flex-row items-center justify-between w-full cursor-pointer"
              onClick={toggleProducts}
            >
              <div>Products</div>
              <div>{isProductsOpen ? "-" : "+"}</div>
            </div>
            {isProductsOpen && (
              <div className="flex flex-col bg-white w-full py-2 px-4">
                <Link href="/product1" className="block py-2 hover:bg-gray-300">
                  Product 1
                </Link>
                <Link href="/product2" className="block py-2 hover:bg-gray-300">
                  Product 2
                </Link>
                {/* Add more products as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex flex-row items-center justify-between w-full cursor-pointer"
              onClick={toggleServices}
            >
              <div>Services</div>
              <div>{isServicesOpen ? "-" : "+"}</div>
            </div>
            {isServicesOpen && (
              <div className="flex flex-col bg-white w-full py-2 px-4">
                <Link href="/service1" className="block py-2 hover:bg-gray-300">
                  Service 1
                </Link>
                <Link href="/service2" className="block py-2 hover:bg-gray-300">
                  Service 2
                </Link>
                {/* Add more services as needed */}
              </div>
            )}
          </div>
          <Link href="/projects" className="text-black hover:text-gray-700">
            Projects
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700">
            About Us
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NAVBAR;
