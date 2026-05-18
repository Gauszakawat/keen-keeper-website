import React from 'react';
import { GoPlus } from 'react-icons/go';
import Card from './Card/Card';

const Home = () => {
  const promiss = fetch('/data.json').then(res=> res.json());
  console.log(promiss);
  
    return (
        <div className='bg-[#F8FAFC] w-10/12 mx-auto text-center space-y-3 pt-5 pb-5'>
           
            <h1 className='lg:text-5xl font-bold pt-5 sm:text-3xl' >Friends to keep close in your life</h1>
            <p className='sm:text-[15px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><GoPlus/>Add a Friend</button>
            
            <div className='grid lg:grid-cols-4 space-x-5 mt-3 mb-3 sm:grid-cols-2 space-y-3'>
                
                 <div className='bg-white rounded-2xl p-5 '>
                    <h1 className='5xl font-bold text-black'>10</h1>
                    <p className='text-1xl'>Total Friends</p>
                  </div>


                  <div className='bg-white rounded-2xl p-5 '>
                    <h1 className='5xl font-bold text-black'>3</h1>
                    <p className='text-1xl'>On Track</p>
                  </div>


                  <div className='bg-white rounded-2xl p-5 '>
                    <h1 className='5xl font-bold text-black'>6</h1>
                    <p className='text-1xl'>Need Attention</p>
                  </div>


                  <div className='bg-white rounded-2xl p-5 '>
                    <h1 className='5xl font-bold text-black'>12</h1>
                    <p className='text-1xl'>Interactions This Month</p>
                  </div>
                 

            </div>

            <div className='border-t-1  border-gray-600 mt-9 pt-4 pb-10 '>
            <h1 className='lg:text-2xl pb-5 text-start font-semibold pt-5 sm:text-3xl' >Your Friends</h1>

            <Card></Card>

            </div>


        </div>
    );
};

export default Home;