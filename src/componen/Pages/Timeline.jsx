import React, { useContext } from 'react';
import { FaHandshake } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { Frendcontext } from '../../context/Frendprovider';
import { Textcontext } from '../../context/Textprovider';
import { videocontext } from '../../context/Videoprovider';



const Timeline = () => {
    const {forcall}= useContext(Frendcontext); 
    // console.log(forcall);
    
    // text////////
    const {fortext}= useContext(Textcontext);
        // console.log(fortext, 'for text');
    // video///
        const {videooo}= useContext(videocontext);
        console.log('videooo', videooo)

 


    return (
        <div className='w-8/12 mx-auto mt-8 mb-8 space-y-3'>
             <h1 className='text-3xl font-bold text-black mb-2'>Timeline </h1>
            

            {
               forcall.map(call=>(<div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                   <img src="../../../public/call-image.png" alt="" />
                </div>
                <div>
                    <div className='flex space-x-2 justify-center items-center'>
                       <h1 className='text-2xl'>meetup </h1>
                    <p className='text-[16px]'>with {call.name}</p>
                        </div> 
                    <p>{call.next_due_date}</p>
                </div>

            </div>)) 
            }

            {
                fortext.map(tett =>(<div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                    <img src="../../../public/text-image.png" alt="" />
                </div>
                <div>
                    <div className='flex space-x-2 justify-center items-center'>
                       <h1 className='text-2xl'>meetup </h1>
                    <p className='text-[16px]'>with {tett.name}</p>
                        </div>
                    <p>{tett.next_due_date}</p>
                </div>

            </div>))
            }
            {
                videooo.map(videoo=>( <div className='bg-white rounded-2xl p-2 flex space-x-3 '>
                <div className='flex justify-center items-center '>
                    <img src="../../../public/vide-image.png" alt="" />
                </div>
                <div>
                    <div className='flex space-x-2 justify-center items-center'>
                       <h1 className='text-2xl'>meetup </h1>
                    <p className='text-[16px]'>with {videoo.name}</p>
                        </div>
                    <p>{videoo.next_due_date}</p>
                </div>

            </div>


                ))
            }

            

            


            

            
            

        </div>
    );
};

export default Timeline;