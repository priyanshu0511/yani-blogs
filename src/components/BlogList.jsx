import React from 'react'
import { Link } from 'react-router-dom'


const BlogList = ({blogs}) => {

  return (
    <div className='mt-4 pb-24'>
        {blogs.map((blog)=>(
          <Link key={blog.id} to={`blogs/${blog.id}`}>
            <div className='border-b-[1px] mb-4 px-4 py-2 hover:cursor-pointer hover:shadow-[1px_3px_5px_rgba(255,255,255,1)]'>
                <p className='text-pink text-[20px] font-bold'>{blog.title}</p>
                <p className='text-[13px] mt-2'>By {blog.author}</p>
                <p className='text-[10px] text-right'>{blog.date}</p>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default BlogList