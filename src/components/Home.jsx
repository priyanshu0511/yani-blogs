import React,{useState,useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore';
import BlogList from './BlogList'
import { db } from '../firebase/config';

const Home = () => {

    const [blogs,setBlogs]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(false);
  
    useEffect(()=>{
      const fetchBlogs = async() => {
        try{
          const blogCollectionref=collection(db,'blogs');
          const blogSnapshot=await getDocs(blogCollectionref);
          const blogList=blogSnapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
          }));
          setBlogs(blogList);
          setIsLoading(false);
        }
        catch(err){
          setError(true);
          setIsLoading(false);
          console.log(err);
        }
      }
      fetchBlogs();
    },[])

  return (
    <div className='w-11/12 mt-10'>
        {isLoading && <div>Loading...</div>}
        {error && <div>Unfortunately cannot fetch blogs!!</div>}
        {!isLoading && !error && blogs && blogs.length === 0 && (
        <div>No blogs available. Check back later!</div>
      )}
      {blogs && blogs.length > 0 && <div>
        <p className='text-[20px]'>All Blogs :-</p>
        <BlogList blogs={blogs}/> 
        </div>}
    </div>
  )
}

export default Home