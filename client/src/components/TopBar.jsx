import React from 'react'
import { FaSearch } from "react-icons/fa";
import Button from './Button';
const TopBar = () => {
    return (
        <article className='flex items-center justify-between px-8 py-4 w-full'>
            {/* user side */}
            <div className='w-[20%] flex items-center justify-center gap-4'>
                <img src="/images/user.jpg" alt="user_profile" className='h-[50px] w-[50px] rounded-full' />
                <p>Steve Dean</p>
            </div>
            {/* right side */}
            <div className='flex-1 flex justify-center gap-10'>
                <label className='flex items-center gap-8 bg-slate-300 rounded-md ps-3'>
                    <span><FaSearch /></span>
                    <input type="text" placeholder='Search...' className='bg-transparent outline-none' />
                </label>
                <Button />
            </div>
        </article>
    )
}

export default TopBar