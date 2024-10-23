import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black border-t-2 text-white text-center p-1 fixed bottom-0 w-full h-[60px] z-50 flex flex-col justify-center'>
            <div>
                <p className=' m-0 text-[12px]'>
                    © {new Date().getFullYear()} Priyanshu Singh. All rights reserved.
                </p>
                <div className='flex justify-center mt-1 w-1/3' >
                    <a href="https://github.com/priyanshu0511" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{ color: 'white', margin: '0 10px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshu-singh-770401260/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{ color: 'white', margin: '0 10px' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
