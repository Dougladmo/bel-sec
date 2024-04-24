import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { TbUrgent } from "react-icons/tb";

const ReportPopUp = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        isActive ? (<div className='text-white flex flex-col bg-[#1E1E1E] pb-4 p-3 rounded-lg fixed top-2 right-2 cursor-pointer'>
            <IoMdClose onClick={() => setIsActive(false)} size={30} className='self-end pr-1 text-white' />
            <h2 className='text-2xl border-b-2 border-white'>Emergency Telephone</h2>
            <div className='pb-2 border-b-2 border-white'>
                <h3 className='text-lg'>Emergency Numbers:</h3>
                <p className='text-sm'>Police: 190</p>
                <p className='text-sm'>Ambulance: 192</p>
                <p className='text-sm'>Fire - fighter: 193</p>
            </div>
            <div className='pb-2 border-b-2 border-white'>
                <h3 className='text-lg'>Whatsapp:</h3>
                <p className='text-sm'>Police: 91 98115-9181</p>
                <p className='text-sm'>Fire-fighter: 91 99339-4574</p>
            </div>
        </div>) : (<TbUrgent onClick={() => { setIsActive(true) }} size={55} className='absolute p-2 text-white transition duration-300 bg-red-500 border-4 border-red-500 rounded-lg cursor-pointer top-2 right-2 hover:bg-white hover:text-red-500' />)
    )
}

export default ReportPopUp