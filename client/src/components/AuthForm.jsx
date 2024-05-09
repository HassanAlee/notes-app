import { useState } from 'react'
import { SlNotebook } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import Input from './Input';
import { registerUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
const AuthForm = () => {
    const [formType, setFormType] = useState('login');
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.authSlice)
    // submit handler
    const handleSubmit = () => {
        dispatch(registerUser(formData))
    }
    return (
        <article className='flex items-center justify-center w-full'>
            <div>
                <SlNotebook className='mx-auto text-5xl text-[#7209b7] font-semibold' />
                <h1 className='text-[#7209b7] capitalize font-black text-4xl my-4 text-center w-full'>welcome to the NOTEBOOK</h1>
                <div className='flex items-center bg-white p-2 shadow-lg rounded-md font-bold text-xl my-4 hover:cursor-pointer'>
                    <span><FcGoogle /></span>
                    <h1 className='ms-16 text-lightPurple'>Continue with Google</h1>
                </div>
                <h1 className='text-center my-4'>OR</h1>
                {!(formType == "login") && <Input title={"name"} values={formData} setFormData={setFormData} />}
                <Input title={"email"} values={formData} setFormData={setFormData} />
                <Input title={"password"} values={formData} setFormData={setFormData} />
                <button type='submit' onClick={handleSubmit} className='capitalize p-2 w-full bg-red-500 rounded-md text-white font-black bg-purple text-2xl hover:bg-lightPurple'>{formType == "login" ? "login" : "register"}</button>
                {/* <h1 className='text-center mt-4'>{!(formType == "login") ? "Already registered?" : "Don't have account yet?"} <span className='capitalize text-purple underline hover:text-lightPurple hover:cursor-pointer' onClick={() => setFormType((prev) => prev == "login" ? "register" : "login")}>{!(formType == "login") ? "login" : "signup"}</span></h1> */}
                <h1 className='text-center mt-4'>{!(formType == "login") ? "Already registered?" : "Don't have account yet?"} <span className='capitalize text-purple underline hover:text-lightPurple hover:cursor-pointer' onClick={() => setFormType((prev) => prev == "login" ? "register" : "login")}>{loading ? "Processing..." : "Proceed"}</span></h1>
            </div>
        </article>
    )
}

export default AuthForm