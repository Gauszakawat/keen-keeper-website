import React from 'react';
import { FaHandshake } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";



const Timeline = () => {
    return (
        <div className='w-8/12 mx-auto mt-8 mb-8 space-y-3'>
             <h1 className='text-3xl font-bold text-black mb-2'>Timeline </h1>
            
            <div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                   <FaHandshake />
                </div>
                <div>
                    <h1 className='text-2xl'>meetup</h1>
                    <p>March 29, 2026</p>
                </div>

            </div>

            <div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                   <IoMdText />
                </div>
                <div>
                    <h1 className='text-2xl'>text</h1>
                    <p>March 29, 2026</p>
                </div>

            </div>


            <div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                   <FaVideo />
                </div>
                <div>
                    <h1 className='text-2xl'>video</h1>
                    <p>March 29, 2026</p>
                </div>

            </div>


            
            

        </div>
    );
};

export default Timeline;