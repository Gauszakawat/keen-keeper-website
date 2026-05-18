import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-cols-4 space-x-3 space-y-3'>
            
            <div className='bg-white rounded-2xl p-4 space-y-2 card '>
              <img className='w-[80px] mx-auto' src="/public/demo image.png" alt="" />

               {/* title */}
              <h1 className='lg:text-2xl pb-1  font-semibold pt-5 sm:text-3xl' >David</h1>
              <p className='sm:text-[15px]'>62d ago</p>



            {/*   btm */}
              <div className='flex space-x-2'>
            <button className='btn bg-[#CBFADB] rounded-full w-[110px] mt-2 mx-auto p-1'>work</button>
              
            <button className='btn bg-[#CBFADB] rounded-full w-[110px] mt-2 mx-auto p-1'>work</button>

              </div>

                 {/*  stus  */}
              <button className='btn bg-[#EFAD44] text-white rounded-full w-[120px] mx-auto p-1'>Almost Due</button>



            </div>
            
        </div>
    );
};

export default Card;