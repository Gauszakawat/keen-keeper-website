import React, { useState } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const Navber = ({setcolor, color}) => {

    // const [color, setcolor] = useState('activ');

    return (
        <div className="navbar bg-white shadow-sm ">
            <div className='w-10/12 mx-auto navbar'>
                <div className="flex-1">
                <a href='/' className="btn btn-ghost text-xl"><b>Keen</b>Keeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-2">

                    <li><button onClick={()=> setcolor('activ')} 
                     className={`${color  === 'activ' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`} href='/'><RiHome2Line/>Home</button></li>

                    <li> <button onClick={()=> setcolor('timeline')} 
                    className={`${color === 'timeline' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`} 
                    href='/Timeline'><MdOutlineWatchLater/>Timeline</button></li>

                    <li><button onClick={()=> setcolor('stats')}
                     className={`${color === 'stats' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`}
                      href='/Stats'><TfiStatsUp/>Stats</button></li>


                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navber;




