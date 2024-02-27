import React from 'react'
import AuthForm from '../components/AuthForm'
const Auth = () => {
    return (
        <>
            <section className='flex justify-between h-screen'>
                <article className='w-1/2 bg-[#ede0d4] flex items-center justify-center'>
                    <AuthForm />
                </article>
                <article className='w-1/2 h-full bg-[#7209b7] flex items-center justify-center'>
                    <img src="/images/auth.png" className='w-full' alt="user" />
                </article>
            </section>
        </>
    )
}

export default Auth