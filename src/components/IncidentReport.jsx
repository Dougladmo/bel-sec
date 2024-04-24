import React from 'react'

const IncidentReport = ({img, description, time, type}) => {
  return (
    <div className='max-w-xs flex flex-col gap-2 mt-3'>
        <h3 className='text-3xl text-center uppercase font-mono'>{type}</h3>
        <img className='w-full' src={img} alt="#" />
        <p className='text-sm'>{description}</p>
        <p className='text-xs'>horário: {time}</p>
    </div>
  )
}

export default IncidentReport