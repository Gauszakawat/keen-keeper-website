import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className=' w-10/12 mx-auto '>
            <div className='pt-20 text-center space-y-2 justify-center items-center '>
                <h1 className='text-white text-4xl font-bold w-10/12 mx-auto '>KeenKeeper</h1>
                <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white font-semi-bold'>Social Links</p>
                
                <div className='justify-center items-center w-30 mx-auto '><img className='w-30 justify-center items-center' src="/public/Social Links.png" alt="" /></div>
            </div>

            <div className='flex justify-between mt-10 pb-5 pt-4 border-t-1 border-gray-400 '>
               <p className='text-white opacity-56 '>© 2026 KeenKeeper. All rights reserved.</p>
               <ul className='flex space-x-5 '>
                <li className='text-white opacity-56'>Privacy Policy</li>
                <li className='text-white opacity-56'>Terms of Service</li>
                <li className='text-white opacity-56'>Cookies</li>
               </ul>
            </div>
        </div>
        </div>
    );
};

export default Footer;