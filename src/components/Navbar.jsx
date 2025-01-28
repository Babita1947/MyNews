import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='px-3 mx-3'>
        <div className='flex justify-between'>
            <div className='flex justify-center items-center p-1 m-1 text-2xl'>
                <GiHamburgerMenu />
                <IoSearch />
            </div>

            <div className='flex justify-center items-center h-24 w-24 p-1 m-1'>
                <img src="https://logos-world.net/wp-content/uploads/2022/01/BBC-Logo.jpg" alt="BBC" />
            </div>

            <div className='flex justify-center items-center gap-5 p-1 m-1'>
                <button className='bg-black text-white font-semibold px-3 py-1 my-1 hover:bg-slate-800 hover:text-white'>Register</button>
                <button className='bg-white font-semibold px-3 py-1 my-1 hover:bg-slate-800 hover:text-white'>Sign in</button>
            </div>
        </div>

        <div className='w-full h-1 pt-4'>
             <hr />
        </div>
    </div>

    
  )
}

export default Navbar