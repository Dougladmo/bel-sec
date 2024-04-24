import React from 'react'

const ReportForm = ({ handleOnSubmit }) => {
    return (
        <form onSubmit={handleOnSubmit} className='flex flex-col gap-5 px-5 md:items-center'>
            <div className='type'>
                <p className='mb-2 text-3xl text-white md:text-center'>What Happened?</p>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="type" />
                    Accident
                </label>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="type" />
                    Assault
                </label>
                <label className='ml-2 text-xl text-white'>
                    <input required className='mr-2' type="radio" name="type" id="type" />
                    Flooding
                </label>
            </div>
            <label className='text-2xl text-white'>Report what happened briefly:</label>
            <input required type="text" name='description' id='description' className='w-1/3 h-10 text-base rounded-lg indent-3' />
            <label className='text-2xl text-white'>Report the location it ocurred:</label>
            <input required type="text" name='description' id='description' className='w-1/3 h-10 px-2 text-xl rounded-lg' />
            <label className='text-2xl text-white'>Report the time it ocurred:</label>
            <input required type="time" name='description' id='description' className='h-10 px-2 text-xl rounded-lg w-28 md:w-1/3' />
            <label className='text-2xl text-white'>The Image of what ocurred:</label>
            <input required type="file" name='description' id='description' className='w-auto py-2 pl-2 text-xl text-center bg-white rounded-lg' />
            <button type='submit' className='self-center px-5 py-2 mb-5 text-2xl text-black uppercase transition duration-300 bg-white rounded-xl hover:text-white hover:bg-[#1E1E1E] border-4 border-white'> send report </button>
        </form>
    )
}

export default ReportForm