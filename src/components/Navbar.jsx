import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

import MyNews from '../assets/mynewsblue.png';

const Navbar = ({ input, setInput,setOption }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Menu Visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='max-w-full px-5 py-0'>
            <div className='flex justify-between items-center'>

                {/* Hamburger Icon */}
                <div className='sm:hidden flex items-center text-2xl cursor-pointer pt-3 m-1'
                    onClick={toggleMenu}>
                      <GiHamburgerMenu />
                </div>

                {/* Search Bar */}
                <div className='flex flex-1 py-3'>
                    <form className="w-[70%] mx-auto pt-7">
                        <div className="relative hidden sm:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-900"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 placeholder-gray-500"
                                placeholder="Search Mockups, Logos..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Logo */}
                <div className='sm:h-24 sm:w-56 h-16 w-28 pb-6 object-contain'>
                    <img src={MyNews} alt="MyNews Logo" />
                </div>
            </div>

            {/* Hamburger Menu Items */}
            <div className={`w-full bg-gray-200 shadow-md ${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                <ul className="flex flex-col text-center py-4 space-y-2">
                    {['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((item, index) => (
                        <li
                            onClick={()=>setOption(item?.toLowerCase())}
                            key={index}
                            className='py-2 cursor-pointer hover:bg-gray-300 rounded-md'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Horizontal Divider */}
            <div className='w-full h-1'>
                <hr />
            </div>
        </div>
    )
}

export default Navbar;
