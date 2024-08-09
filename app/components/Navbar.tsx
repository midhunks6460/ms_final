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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close all dropdowns when toggling menu
  };

  const toggleDropdown = (dropdown: string) => {
    // Toggle the dropdown; if it's already open, close it, otherwise open it
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
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
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative">
            <div
              className="flex flex-row items-center justify-center gap-2 cursor-pointer"
              onClick={() => toggleDropdown("products")}
            >
              <div>Products</div>
              <img className="w-2 h-2" alt="" src="/vector-4.svg" />
            </div>

            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8  bg-[rgba(226,228,234,0.5)] z-10  w-[1000px] transition-all duration-300 ease-in-out ${
                openDropdown === "products"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div
                className={`flex flex-col transition-opacity duration-300 ${openDropdown === "products" ? "opacity-100" : "opacity-0"}`}
              >
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Product 1
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Product 2
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Product 3
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Product 4
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Product 5
                </Link>

                {/* Add more products as needed */}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <div
              className="flex flex-row items-center justify-center gap-2 cursor-pointer"
              onClick={() => toggleDropdown("services")}
            >
              <div>Services</div>
              <img className="w-2 h-2" alt="" src="/vector-4.svg" />
            </div>

            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8  bg-[rgba(226,228,234,0.5)] z-10  w-[1000px] transition-all duration-300 ease-in-out ${
                openDropdown === "services"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div
                className={`flex flex-col transition-opacity duration-300 ${openDropdown === "services" ? "opacity-100" : "opacity-0"}`}
              >
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Service 1
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Service 2
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Service 3
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Service 4
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block w-full py-6 px-6 hover:bg-gray-300"
                >
                  Service 5
                </Link>
                {/* Add more services as needed */}
              </div>
            </div>
          </div>

          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            Projects
          </Link>
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            About Us
          </Link>
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
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
        <div className="flex flex-col md:hidden items-start justify-start py-4 px-6 gap-4 text-lg font-sans bg-[#e2e4ea] w-full transition-transform transform scale-100 duration-300 ease-in-out">
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <div className="relative">
            <div
              className="flex flex-row items-center justify-between w-full cursor-pointer"
              onClick={() => toggleDropdown("products")}
            >
              <div>Products</div>
              <div>{openDropdown === "products" ? "<-" : "->"}</div>
            </div>
            {openDropdown === "products" && (
              <div className="flex flex-col bg-[#e2e4ea] w-full py-2 px-4">
                <Link
                  href="https://www.google.com"
                  className="block py-2 hover:bg-gray-300"
                >
                  Product 1
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block py-2 hover:bg-gray-300"
                >
                  Product 2
                </Link>
                {/* Add more products as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex flex-row items-center justify-between w-full cursor-pointer"
              onClick={() => toggleDropdown("services")}
            >
              <div>Services</div>
              <div>{openDropdown === "services" ? "<-" : "->"}</div>
            </div>
            {openDropdown === "services" && (
              <div className="flex flex-col bg-[#e2e4ea] w-full py-2 px-4">
                <Link
                  href="https://www.google.com"
                  className="block py-2 hover:bg-gray-300"
                >
                  Service 1
                </Link>
                <Link
                  href="https://www.google.com"
                  className="block py-2 hover:bg-gray-300"
                >
                  Service 2
                </Link>
                {/* Add more services as needed */}
              </div>
            )}
          </div>
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            Projects
          </Link>
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            About Us
          </Link>
          <Link
            href="https://www.google.com"
            className="text-black hover:text-gray-700"
          >
            Contact
          </Link>
          <div className="flex gap-4 mt-4">
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <img
                src="/path/to/facebook-icon.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <img
                src="/path/to/instagram-icon.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter">
              <img
                src="/path/to/twitter-icon.svg"
                alt="Twitter"
                className="h-6 w-6"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NAVBAR;
