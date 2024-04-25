import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import ReportForm from './ReportForm';
import {Slide} from 'react-awesome-reveal'

const ReportSender = () => {
    const [isActive, setIsActive] = useState(false)

  return (
    <>
        {
        isActive ? 
        (
            <Slide className='absolute top-0'>
                <div className='bg-[#1E1E1E]  h-screen w-screen flex flex-col'>
                    <IoMdClose onClick={() => setIsActive(false)} size={50} className='self-end mt-5 mr-2 text-right text-white cursor-pointer'/>
                    <ReportForm />
                </div>
            </Slide>
        )
        :
        (
            <div  onClick={() => setIsActive(true)} className='cursor-pointer flex flex-col text-[#1E1E1E] hover:text-yellow-400 transition duration-300 hover:bg-[#1E1E1E] items-center justify-center fixed w-20 h-20 bg-yellow-400 border-4 border-[#1E1E1E] rounded-full right-4 bottom-20'>
                <FiAlertTriangle size={50} />
            </div>
        )
    }
    </>
  )
}

export default ReportSender