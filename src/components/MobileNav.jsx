import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const MobileNav = () => {
  return (
    <ul className='bg-[#1E1E1E] md:hidden fixed bottom-0 text-white h-[9%] py-7 w-full flex justify-center items-center'>
        <li className='flex flex-col items-center pr-6 border-r-2 border-white'> <FiAlertTriangle className='text-yellow-500'/> Security Tips</li>
        <li className='flex flex-col items-center px-5 border-r-2 border-white'>  <FaCircle className='text-green-400'/> Safe areas</li>
        <li className='flex flex-col items-center pl-6 '> <FaCircle className='text-red-500'/> Risk areas</li>
    </ul>
  )
}

export default MobileNav