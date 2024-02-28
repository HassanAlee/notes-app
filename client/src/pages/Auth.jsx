import React from 'react'
import AuthForm from '../components/AuthForm'
const Auth = () => {
    return (
        <>
            <section className='flex justify-between h-screen'>
                <article className='w-full md:w-1/2 bg-[#ede0d4] flex items-center justify-center p-6 lg:p-0'>
                    <AuthForm />
                </article>
                <article className='md:w-1/2 h-full bg-[#7209b7]  hidden md:block'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <img src="/images/auth.png" className='w-full' alt="user" />
                    </div>
                </article>
            </section>
        </>
    )
}

export default Auth