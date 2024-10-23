import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { getAuth } from 'firebase/auth';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const docRef = doc(db, 'blogs', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setBlog({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('Blog not found');
                }
            } catch (err) {
                setError('Failed to fetch blog');
                console.error('Error fetching blog:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await deleteDoc(doc(db, 'blogs', id));
                navigate('/');
            } catch (err) {
                setError('Failed to delete blog');
                console.error('Error deleting blog:', err);
            }
        }
    };

    return (
        <div className='blog-details w-11/12 mt-8'>
            {isLoading ? (<div>Loading...</div>)
            :(error && <div>{error}</div>)}
            {blog  && (
                <article>
                    <h2 className='text-pink text-2xl font-bold'>{blog.title}</h2>
                    <p className='mt-5'>By {blog.author}</p>
                    <div className='mt-5'>{blog.body}</div>
                    {/* Check if the current user's ID matches the blog's userId */}
                    {auth.currentUser && blog.userid && blog.userid === auth.currentUser.uid && (
                        <button
                            className='bg-pink px-2 py-1 mt-7 rounded-md mb-5'
                            onClick={handleDelete}
                        >
                            Delete Blog
                        </button>
                    )}
                </article>
                )}
                {(!blog && !isLoading && !error) && <div>No blog found.</div>}
        </div>
    );
};

export default BlogDetails;
