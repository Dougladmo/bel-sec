import React from 'react'

const IncidentReport = ({img, description, time, type, local}) => {
  return (
    <div className='flex flex-col max-w-xs gap-2 mt-3'>
        <h3 className='font-mono text-3xl font-bold text-center uppercase'>{type}</h3>
        <img className='w-full rounded-md' src={img} alt="#" />
        <h4 className='text-2xl font-semibold'>{local}</h4>
        <p className='text-base'>{description}</p>
        <p className='text-sm'>horário: {time}</p>
    </div>
  )
}

export default IncidentReport