import React from 'react';
import { Link } from 'react-router';

const Card = ({frend}) => {
  // console.log(frend)
    return (
        <Link to={`/Singleprofilepage/${frend.id}`}>
        <div className='bg-white rounded-2xl p-4 space-y-2 card '>
              <img className='w-[80px] rounded-full mx-auto' src={frend.picture} alt="" />

               {/* title */}
              <h1 className='lg:text-2xl pb-1  font-semibold pt-5 sm:text-3xl' >{frend.name}</h1>
              <p className='sm:text-[15px]'>{frend.days_since_contact}d ago</p>



            {/*   btm */}
              <div className='flex space-x-2'>

            {
              frend.tags.map(tag=> ( <button className='btn bg-[#CBFADB] rounded-full w-[110px] mt-2 mx-auto p-1'>{tag}</button> ) )
            }
              

              </div>

                 {/*  stus  */}
              <button className={`${frend.status === "overdue" ? "bg-red-500" : "bg-green-500" } btn text-white rounded-full w-[120px] mx-auto p-1`}>{frend.status}</button>



        </div></Link>
                   
    );
};

export default Card;