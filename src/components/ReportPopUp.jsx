import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const ReportPopUp = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        isActive ? (<div className='text-white flex flex-col bg-[#1E1E1E] pb-4 p-3 rounded-lg absolute top-2 right-2 cursor-pointer'>
            <IoMdClose onClick={() => setIsActive(false)} size={30} className='pr-1 text-white self-end'/>
            <h2 className='text-2xl border-b-2 border-white'>Emergency Telephone</h2>
            <div className='border-b-2 border-white pb-2'>
                <h3 className='text-lg'>Emergency Numbers:</h3>
                <p className='text-sm'>Police: 190</p>
                <p className='text-sm'>Ambulance: 192</p>
                <p className='text-sm'>Fire - fighter: 193</p>
            </div>
            <div className='border-b-2 border-white pb-2'>
                <h3 className='text-lg'>Whatsapp:</h3>
                <p className='text-sm'>Police: 91 98115-9181</p>
                <p className='text-sm'>Fire-fighter: 91 99339-4574</p>
            </div>
        </div>) : (<IoMdMenu onClick={() => {setIsActive(true)}} size={55} className='bg-[#1E1E1E] p-2 text-white rounded-lg absolute top-2 right-2 cursor-pointer' />)
    )
}

export default ReportPopUp