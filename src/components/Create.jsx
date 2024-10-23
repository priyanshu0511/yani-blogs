import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { app, db } from '../firebase/config';
import { getAuth } from 'firebase/auth';

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    
    const todayDate=new Date();
    const month=todayDate.getMonth()+1;
    const year=todayDate.getFullYear();
    const day=todayDate.getDate();
    const date=`${day}.${month}.${year}`

    const navigate=useNavigate();

    const blogCollectionRef=collection(db,'blogs');

    const auth=getAuth(app);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsPending(true);
    
        const blog = { title, body, author, date };
        
        console.log("Blog data to be sent:", blog);
    
        try {
            // Add blog to Firestore, spreading blog data and adding id
            await addDoc(blogCollectionRef, { ...blog, userid: auth.currentUser.uid });
            console.log("New Blog Added");
    
            // Optional: Post to another backend
            await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            });
    
            setIsPending(false);
            navigate('/');
        } catch (error) {
            console.error("Error adding blog:", error);
            setIsPending(false);
        }
    };
    


    return (
        <div className='create w-11/12 pb-24'>
            <h2 className='text-pink text-center mt-4 text-[20px] font-bold '>Add a new blog...</h2>
            <form onSubmit={handleSubmit} className='w-2/3'>
                <label className='block mt-5'>Blog Name:</label>
                <input type='text'
                    className='border border-white w-full mt-2 px-2 py-1'
                    required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label className='block mt-5'>Blog Content: </label>
                <textarea
                    className='border border-white w-full mt-2 px-2 py-1 h-40'
                    required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label className='block mt-5'>Blog Author: </label>
                <input
                    className='border border-white w-full mt-2 px-2 py-1'
                    value={author} onChange={(e) => setAuthor(e.target.value)}>
                </input>
                <div className='block'>
                    {!isPending ?
                        <button className='bg-pink px-2 py-1 rounded-md mt-5 text-center mx-auto'>Add blog</button> :
                        <button className='bg-pink px-2 py-1 rounded-md mt-5 text-center mx-auto'>Adding Blog...</button>}
                </div>
            </form>
        </div>
    )
}

export default Create