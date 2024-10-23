import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/config';

const LogIn = ({ setIsAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Account Logged in");
            setIsAuth(true);
            localStorage.setItem("getAuth", true);
            navigate('/');
        } catch (err) {
            console.log(err);
            setError("Invalid email or password");  // Error message handling
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-4/5 justify-center items-center h-screen'>
                <div className='border w-full border-pink px-4 py-4 rounded-md'>
                    <h2 className='text-4xl mb-6 text-pink font-bold text-center'>Log In</h2>
                    
                    {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

                    <label htmlFor="email" className='mb-6 flex text-left'>
                        <p className='w-1/4'>Email: </p>
                        <input 
                            type="email" 
                            required
                            value={email} 
                            onChange={(e) => { setEmail(e.target.value); }} 
                            className='px-2 py-1 ml-4 border w-3/4' 
                        />
                    </label>

                    <label htmlFor="password" className='mb-6 flex text-left'>
                        <p className='w-1/4'>Password:</p>
                        <input 
                            type="password" 
                            required 
                            value={password} 
                            onChange={(e) => { setPassword(e.target.value); }} 
                            className='px-2 py-1 border ml-4 w-3/4'
                        />
                    </label>

                    <button 
                        type="submit" 
                        className='bg-pink px-3 py-2 rounded-md mb-5 mx-auto text-center block'>
                        Log In
                    </button>

                    <p className='text-[12px] text-center'>
                        Don't have an account? 
                        <Link to='/signup' className='text-pink underline'> Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
