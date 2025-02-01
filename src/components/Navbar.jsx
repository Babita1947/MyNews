import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

import MyNews from '../assets/mynewsblue.png';

const Navbar = ({input, setInput}) => {
    return (
        <div className='max-w-full px-5 py-0'>
            <div className='flex justify-around'>
                <div className='flex justify-center items-center pt-3 m-1 text-2xl'>
                    <GiHamburgerMenu />
                    {/* <IoSearch /> */}
                </div>

                <div className='flex flex-1 py-3'>
                    <form className="w-[70%] mx-auto pt-7">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search
                        </label>
                        <div className="relative hidden sm:block">
                            {/* Search Icon */}
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-900"
                                    aria-hidden="true"
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
                            {/* Input Field */}
                            <input
                                value={input}
                                onChange={(e)=>setInput(e.target.value)}
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 placeholder-gray-500 "
                                placeholder="Search Mockups, Logos..."
                                required
                            />
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                </div>
                <div className='sm:h-24 sm:w-56 h-16 w-28 pb-6 object-contain'>
                    <img src={MyNews} alt="" />
                </div>

                {/* <div className='flex justify-center items-center gap-5 p-1 m-1'>
                    <button className='bg-black text-white font-semibold px-3 py-2 my-1 rounded-md hover:bg-slate-800 hover:text-white'>Register</button>
                    <button className='bg-white font-semibold px-3 py-2 my-1 hover:rounded-md hover:bg-slate-800 hover:text-white'>Sign in</button>
                </div> */}
            </div>

            <div className='w-full h-1'>
                <hr />
            </div>
        </div>


    )
}

export default Navbar