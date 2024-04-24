import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const MobileNav = () => {
  return (
    <div className='bg-[#1E1E1E] md:hidden fixed bottom-0 text-white h-[9%] py-7 w-full flex justify-center items-center'>
        <h1 className='flex flex-col items-center border-r-2 border-white pr-6'> <FiAlertTriangle className='text-yellow-500'/> Security Tips</h1>
        <h1 className='flex flex-col items-center border-r-2 border-white px-5'>  <FaCircle className='text-green-400'/> Safe areas</h1>
        <h1 className=' flex flex-col items-center pl-6'> <FaCircle className='text-red-500'/> Risk areas</h1>
    </div>
  )
}

export default MobileNav