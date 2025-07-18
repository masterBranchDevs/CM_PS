import React, { useState } from "react";
import logo from './logo.png';
import './nav.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav id="nav1" className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                    <img
                        src={logo}
                        className="h-8 rounded-full"
                        alt="Flowbite Logo"
                    />
                    <span id="cmps" className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        CM Placement Services
                    </span>
                </a>

                {/* Hamburger Menu Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded={isMenuOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns={logo}
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col md:flex-row items-center justify-center font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/client"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Clients
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
