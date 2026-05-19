import React, { use, useContext, useState } from 'react';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { IoVideocamSharp } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { useParams } from 'react-router';
import Frendprovider, { Frendcontext } from '../../../context/Frendprovider';
import { Textcontext } from '../../../context/Textprovider';
import { videocontext } from '../../../context/Videoprovider';

const promis = fetch('/data.json').then(res=> res.json()); 



const Singleprofilepage = () => {
 
    const {id} = useParams();
    const frendsdata = use(promis);
    const spicialdata = frendsdata.find(frd=> frd.id == id)

    

    const {forcall, setforcall, callhandle}= useContext(Frendcontext); 

    // console.log(forcall, setforcall, callhandle, 'ha ha ha')

    const {fortext, setfortext, texthandle}= useContext(Textcontext); 

    // video/////////////

        const {videooo, setvideooo, videohandle}= useContext(videocontext); 






    return (
        <div className='bg-[#F8FAFC]'>
            <div className='lg:flex  sm:grid grid-cols-1 lg:w-8/12 sm:w-full mx-auto mt-5 mb-5 pt-10 pb-10 space-x-5 space-y-5'>

                <div className=' space-y-2 lg:w-4/12 sm:w-full'>

                    <div className='text-center'>
                        <div className='bg-white rounded-2xl p-4 space-y-2 card '>
                            <img className='w-[80px] rounded-full  mx-auto' src={spicialdata.picture} alt="" />


                            <h1 className='lg:text-2xl pb-1  font-semibold pt-5 sm:text-3xl' >{spicialdata.name}</h1>


                            {/*   btm */}
                            <div className='flex space-x-2'>

                                {
                                    spicialdata.tags.map(tag=> <button className='btn bg-[#CBFADB] rounded-full w-[110px] mt-2 mx-auto p-1'>{tag}</button>)
                                }
                                </div>

                            {/*  stus  */}
                            <button className={`${spicialdata.status === "overdue" ? "bg-red-500" : "bg-green-500" } btn text-white rounded-full w-[120px] mx-auto p-1`}>{spicialdata.status}</button>



                            {/* title */}
                            <p className='sm:text-[15px]'>{spicialdata.bio}</p>
                            <p className='sm:text-[15px]'>Preferred: {spicialdata.email}</p>

                        </div>


                    </div>

                    <div className='text-center'> <div className='bg-white rounded-1xl p-2 space-y-2 card justify-center items-center  flex items-center gap-2 '>

                        <h1 className=' flex items-center gap-2 text-1xl' ><MdOutlineNotificationsActive className='justify-center ' />Snooze 2 weeks</h1>


                    </div>
                    </div>

                    <div className='text-center'> <div className='bg-white rounded-1xl p-2 space-y-2 card justify-center items-center  flex items-center gap-2 '>

                        <h1 className=' flex items-center gap-2 text-1xl' ><BsArchive className='justify-center ' />Archive</h1>


                    </div>
                    </div>



                    <div className='text-center'> <div className='bg-white rounded-1xl p-2 space-y-2 card justify-center items-center  flex items-center gap-2 '>

                        <h1 className=' flex items-center gap-2 text-red-500 text-1xl' ><AiFillDelete className='justify-center ' />Delete</h1>


                    </div>
                    </div>

                </div>

                <div className='lg:w-8/12 sm:w-full space-y-5'>

                    {/* 111111111111111 */}
                    <div className=' grid lg:grid-cols-3 sm:grid-cols-1 space-y-3 text-center space-x-3'>
                        <div className='bg-white rounded-2xl p-7 '>
                            <h1 className='5xl font-bold text-black'>{spicialdata.days_since_contact}</h1>
                            <p className='text-1xl'>Days Since Contact</p>
                        </div>

                        <div className='bg-white rounded-2xl p-7 '>
                            <h1 className='5xl font-bold text-black'>{spicialdata.goal}</h1>
                            <p className='text-1xl'>Goal (Days)</p>
                        </div>

                        <div className='bg-white rounded-2xl p-7 '>
                            <h1 className='5xl font-bold text-black'>{spicialdata.next_due_date}</h1>
                            <p className='text-1xl'>Next Due</p>
                        </div>

                    </div>


                    {/* 222222222222 */}
                    <div>
                        <div className='bg-white rounded-2xl p-7 '>
                            <div className='flex justify-between items-center '>
                                <h1 className='5xl font-bold text-black'>Relationship Goal</h1>
                                <button className='btn'>Edit</button>
                            </div>
                            <p className='text-1xl'>Connect every <b>30 days</b></p>
                        </div>

                    </div>

                    {/* 3333333333 */}
                    <div>

                        <div className='bg-white rounded-2xl p-7 '>

                            <h1 className='5xl font-bold text-black'>Quick Check-In</h1>

                            <div className='flex text-center grid grid-cols-3 mt-3 space-x-3 '>

                                <button onClick={()=>{callhandle(spicialdata)}} className='bg-[#F8FAFC] rounded-2xl p-5 justify-center '>
                                    <LuPhoneCall className='mx-auto' />
                                    <h1 className='3xl font-semibold text-black'>Call</h1>
                                </button>

                                <div onClick={()=>{texthandle(spicialdata)}} className='bg-[#F8FAFC] rounded-2xl p-5 justify-center '>
                                    <IoMdText className='mx-auto' />
                                    <h1 className='3xl font-semibold text-black'>Text</h1>
                                </div>

                                <div onClick={()=>{videohandle(spicialdata)}} className='bg-[#F8FAFC] rounded-2xl p-5 justify-center '>
                                    <IoVideocamSharp className='mx-auto' />
                                    <h1 className='3xl font-semibold text-black'>Video</h1>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Singleprofilepage;