import React, { useEffect, useState } from 'react'
import {Fade } from 'react-awesome-reveal'

const SecurityAlert = () => {
    const [message, setMessage] = useState('No alerts at the moment')

    const url = 'https://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/city?Belém&state=PA&country=BR&token=85eb909804c73994398fbe78982ac223'

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setMessage(data.text)
            })
            .catch((err) => console.log(err))
    }, [])
  return (
    <Fade duration={300}>
        <div className='bg-[#1E1E1E] fixed left-1/2 -translate-x-1/2 text-white h-1/2 p-10 rounded-lg w-80 top-1/2 -translate-y-1/2 py-7'>
            <h2 className='text-3xl border-b-2 border-white font-bold font-mono'>Wheather alert</h2>
            <p className='text-base mt-5'>{message}</p>
        </div>
    </Fade >
  )
}

export default SecurityAlert