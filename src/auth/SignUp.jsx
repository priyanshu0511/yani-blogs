import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth = getAuth(app);

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account Created")
            navigate('/login');
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-4/5 justify-center items-center h-screen'>
            <div className='border w-full border-pink px-4 py-4 rounded-md'>
                <h2 className='text-4xl mb-16 text-pink font-bold text-center'>Sign Up</h2>
                <label htmlFor="email" className='mb-6 flex text-left'><p className='w-1/4'>Email: </p>
                    <input type="email" required 
                    value={email} 
                    className='px-2 py-1 ml-4 border w-3/4' 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </label>
                <label htmlFor="password" className='mb-6 flex text-left'><p className='w-1/4'>Password:</p> 
                    <input type="password" required 
                    value={password} 
                    className=' px-2 py-1 border ml-4 w-3/4'
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </label>
                <button className='bg-pink px-3 py-2 rounded-md mb-5 mx-auto text-center block'>Sign Up</button>
                <p className='text-[12px] text-center'>Already Registered? <Link to='/login' className='text-pink underline'>Sign In</Link></p>
                </div>
            </form>

        </div>
    )
}

export default SignUp