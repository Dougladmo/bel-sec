import React, { useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import IncidentReport from './IncidentReport'
import img from '../assets/images.jpg'

const ReportsFeed = () => {
    const [isActive, setIsActive] = useState(true)

    const Reports = [
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
    ]

    return (
        <div className={`bg-[#1E1E1E] text-white h-screen flex max-w-80 md:max-w-xl ${isActive ? 'w-auto' : 'w-1'}`}>
            <div className='py-5 flex flex-col items-center'>
                {
                    isActive ?
                        (
                            <div className='px-5'>
                                <h2 className='text-4xl text-center border-b-4 border-white pb-2'>Incident Reports</h2>
                                <IncidentReport time={Reports[0].time}  description={Reports[0].description} img={Reports[0].img} type={Reports[0].type} />
                            </div>
                        )
                        :
                        (null)
                }
            </div>
            <div onClick={() => {isActive ? setIsActive(false) : setIsActive(true) }} className={`self-center bg-[#1E1E1E] flex items-center relative h-32 rounded-r-lg ${isActive ? 'left-10' : 'left-0'}`}>
            {
                    isActive ?
                        (<IoMdArrowDropleft size={50} className='' />)
                        :
                        (<IoMdArrowDropright size={50} className='' />)
                }
            </div>
        </div>
    )
}

export default ReportsFeed