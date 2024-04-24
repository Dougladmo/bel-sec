import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='fixed top-1 text-white py-7 w-full'>
            <ul className='md:flex md:justify-center hidden md:items-center gap-6'>
                <li className='flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FiAlertTriangle className='text-yellow-500' /> Security alerts</li>
                <li className='flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'>  <FaCircle className='text-green-400' /> Safe areas</li>
                <li className=' flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FaCircle className='text-red-500' /> Risk areas</li>
            </ul>
        </div>
    )
}

export default Navbar