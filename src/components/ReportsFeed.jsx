import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import IncidentReport from './IncidentReport'
import noNews from '../assets/nonews.png'
import SecTips from '../assets/SecurityTips.png'

const ReportsFeed = () => {
    const [isActive, setIsActive] = useState(false)
    const [navigation, setNavigation] = useState('Feed')
    const [Reports, setReports] = useState([{
        tipo: 'No News',
        image: noNews,
        description: 'No news at the moment',
        time: "Just now"
    }])

    const url = 'http://localhost:8000/Reports/'

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setReports(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={`bg-[#1E1E1E] text-white h-screen flex max-w-80 fixed top-0 left-0 md:max-w-xl ${isActive ? 'w-auto animate-offCanvas' : 'w-1'}`}>
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
                                    <h2 className='pb-2 mt-2 font-mono text-4xl text-center uppercase border-b-4 border-white max-w-80'>{navigation == 'Feed' ? 'Incidents Feed' : 'Security Tips'}</h2>
                                    {navigation == 'Feed' ? Reports.map((Report, index) => {
                                        return <Fade duration={1500}><IncidentReport key={index} local={Report.local} time={Report.time} description={Report.description} type={Report.tipo} img={Report.image} /></Fade>
                                    })
                                        :
                                        (
                                            <Fade duration={1500}>
                                                <ul className='flex flex-col gap-5 py-5 pl-5 text-justify list-decimal max-w-80'>
                                                    <img src={SecTips} alt="Security tips" className='w-full rounded-md h-52 ' />
                                                    <li>
                                                        <h4 className='text-lg font-bold'>Keep your documents and money in safe places.</h4>
                                                        <p className='text-sm text-justify max-w-80'>Keep your documents and money in safe places: Ensure the security of your important documents and money by storing them in secure locations such as a hidden wallet, a hotel safe, or a locked bag while traveling to prevent loss or theft.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Avoid leaving belongings, in areas with little visibility.
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Avoid leaving belongings in areas with little visibility: Reduce the risk of theft by refraining from leaving your belongings unattended in areas with limited visibility, such as your back or secluded spots, where they may be more susceptible to theft or tampering.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Know your local emergency numbers.
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Know your local emergency numbers: Stay prepared for emergencies by familiarizing yourself with the local emergency contact numbers in the area you are visiting. This knowledge can expedite response times in critical situations.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Avoid using your cell phone in places with few people around
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Avoid using your cell phone in deserted areas: Minimize the risk of being targeted by criminals by refraining from using your cell phone in deserted or isolated areas where you may be more vulnerable to theft or assault.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Be aware of possible scams and theft.
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Be aware of possible scams and theft: Stay vigilant and educate yourself about common scams and theft tactics prevalent in the area you are visiting to avoid falling victim to fraudulent schemes or theft.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Avoid attracting attention with valuable objects.
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Avoid attracting attention with valuable objects: Lower the likelihood of being targeted by thieves by refraining from flaunting valuable possessions such as expensive jewelry, gadgets, or cash in public places, thus minimizing the risk of attracting unwanted attention.</p>
                                                    </li>
                                                    <li>
                                                        <h4 className='text-lg font-bold'>
                                                            Choose safe transportation and avoid sharing personal information.
                                                        </h4>
                                                        <p className='text-sm text-justify max-w-80'>Choose safe transportation and avoid sharing personal information: Prioritize safety by opting for reputable transportation services and exercising caution when sharing personal information with strangers to safeguard against potential risks such as identity theft or physical harm.</p>
                                                    </li>
                                                </ul>
                                            </Fade>
                                        )
                                    }
                                </div>
                            </div>
                        )
                        :
                        (null)
                }
            </div>
            <div onClick={() => { isActive ? setIsActive(false) : setIsActive(true) }} className={`cursor-pointer self-center bg-[#1E1E1E] flex items-center transition duration-300 relative h-32 hover:bg-white hover:text-[#1E1E1E]  border-4 border-[#1E1E1E] rounded-r-lg ${isActive ? 'left-14 ' : '-left-2'}`}>
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