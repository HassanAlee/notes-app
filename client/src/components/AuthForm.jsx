import { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import Input from './Input';
const AuthForm = () => {
    const [formType, setFormType] = useState('loogin')
    return (
        <article className='flex items-center justify-center'>
            <div>
                <SlNotebook className='mx-auto text-5xl text-[#7209b7] font-semibold' />
                <h1 className='text-[#7209b7] capitalize font-black text-4xl'>welcome {formType == "login" ? "back" : "to the NOTEBOOK"}</h1>
                <div className='flex items-center bg-white p-2 shadow-lg rounded-md font-bold text-xl'>
                    <span><FcGoogle /></span>
                    <h1 className='ms-16'>Continue with Google</h1>
                </div>
                <h1 className='text-center'>OR</h1>
                {formType == "register" && <Input title={"Name"} />}
                <Input title={"Email"} />
                <Input title={"Password"} />
                <button className='capitalize p-2 w-full bg-red-500 rounded-md text-white font-bold'>login</button>
            </div>
        </article>
    )
}

export default AuthForm