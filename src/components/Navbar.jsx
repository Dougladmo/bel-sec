import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Navbar = ({handleOnClickAlert, handleOnClickRisk, handleOnClickSafe}) => {
    return (
        <div className='fixed w-full text-white top-1 py-7'>
            <ul className='hidden gap-6 md:flex md:justify-center md:items-center'>
                <li onClick={handleOnClickAlert} className='flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FiAlertTriangle className='text-yellow-500' /> Security alerts</li>
                <li onClick={handleOnClickSafe} className='flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'>  <FaCircle className='text-green-400' /> Safe areas</li>
                <li onClick={handleOnClickRisk} className=' flex cursor-pointer bg-[#1E1E1E] items-center px-8 py-4 gap-5 rounded-full'> <FaCircle className='text-red-500' /> Risk areas</li>
            </ul>
        </div>
    )
}

export default Navbar