import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuth, signUserOut }) => {
  return (
    <div>
      {/* Navbar container */}
      <div className='flex justify-between items-center mt-7 border-b-[1px] pb-6'>
        <div className='text-pink font-bold text-3xl'>Yani-Blogs</div>

        <div className='flex items-center'>
          <button className='cursor-pointer hover:text-pink'>
            <Link to='/'>Home</Link>
          </button>

          {isAuth ? (
            <button onClick={signUserOut} className='bg-pink ml-3 px-2 py-1 rounded-md'>
              Log Out
            </button>
          ) : (
            <button>
              <Link to='/login' className='bg-pink ml-3 px-2 py-1 rounded-md'>
                Log In
              </Link>
            </button>
          )}
        </div>
      </div>

      {/* Create button container */}
      {isAuth && (
        <div className='flex justify-end mt-5'>
          <button className=' px-2 py-1'>
            <Link to='/create' className='bg-pink rounded-md px-2 py-1'>
              Create
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
