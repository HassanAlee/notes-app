import React from 'react'

const Input = ({ title }) => {
    return (
        <div className='border-red-500 border-2 rounded-md p-3 relative mb-3'>
            <h1 className='absolute top-0 left-4 transform 
            -translate-y-1/2 z-50 bg-[#ede0d4]
            px-4
            '>{title}</h1>
            <input type="text" className='w-full bg-transparent outline-0' />
        </div>
    )
}

export default Input