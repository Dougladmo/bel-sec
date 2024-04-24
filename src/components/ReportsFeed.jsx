import React, { useState } from 'react'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import IncidentReport from './IncidentReport'
import img from '../assets/images.jpg'

const ReportsFeed = () => {
    const [isActive, setIsActive] = useState(false)
    const [navigation, setNavigation] = useState('Feed')
    const [Reports, setReports] = useState([
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
        {
            type: 'acidente',
            description: 'Um acidente de carro em uma interseção da cidade deixou danos materiais e ferimentos leves nos ocupantes. As autoridades estão investigando.',
            time: '18:45',
            img: img,
        },
    ])

    return (
        <div className={`bg-[#1E1E1E] text-white h-screen flex max-w-80 absolute top-0 left-0 md:max-w-xl ${isActive ? 'w-auto animate-offCanvas' : 'w-1'}`}>
            <div className='flex flex-col items-center py-5'>
                {
                    isActive ?
                        (
                            <div className='flex flex-col items-center w-full pl-5 pr-10 overflow-auto cursor-pointer'>
                                <ul className='flex mb-2'>
                                    <li onClick={() => setNavigation('Feed')} className='border-b-2 border-white py-2 transition duration-300 px-5 rounded-l-md hover:bg-white hover:text-[#1E1E1E]'>News Feed</li>
                                    <li onClick={() => setNavigation('Tips')} className='border-b-2 border-white py-2 transition duration-300 px-5 rounded-r-md hover:bg-white hover:text-[#1E1E1E]'>Security Tips</li>
                                </ul>
                                <div>
                                    <h2 className='pb-2 mt-2 font-mono text-4xl text-center uppercase border-b-4 border-white'>{navigation == 'Feed' ? 'Incidents Feed' : 'Security Tips'}</h2>
                                    {navigation == 'Feed'? Reports.map((Report, index) => {
                                        return <IncidentReport key={index} time={Report.time} description={Report.description} type={Report.type} img={Report.img} /> 
                                    }) 
                                    :
                                    (
                                        <div>
                                            dicas
                                        </div>
                                    ) 
                                    } 
                                </div>
                            </div>
                        )
                        :
                        (null)
                }
            </div>
            <div onClick={() => {isActive ? setIsActive(false) : setIsActive(true) }} className={`cursor-pointer self-center bg-[#1E1E1E] flex items-center transition duration-300 relative h-32 hover:bg-white hover:text-[#1E1E1E]  border-4 border-[#1E1E1E] rounded-r-lg ${isActive ? 'left-14 ' : '-left-2'}`}>
            {
                    isActive ?
                        (<IoMdArrowDropleft size={50} />)
                        :
                        (<IoMdArrowDropright size={50} />)
                }
            </div>
        </div>
    )
}

export default ReportsFeed