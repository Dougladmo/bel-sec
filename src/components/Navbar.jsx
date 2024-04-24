import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='fixed top-1 text-white h-[9%] py-7 w-full md:flex md:justify-center hidden md:items-center gap-6'>
            <h1 className='flex bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FiAlertTriangle className='text-yellow-500' /> Security Tips</h1>
            <h1 className='flex bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'>  <FaCircle className='text-green-400' /> Safe areas</h1>
            <h1 className=' flex bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FaCircle className='text-red-500' /> Risk areas</h1>
        </div>
    )
}

export default Navbar