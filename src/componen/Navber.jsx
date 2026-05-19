import React, { useState } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link } from 'react-router';

const Navber = () => {

    const [color, setcolor] = useState('activ');

    return (
        <div className="navbar bg-white shadow-sm ">
            <div className='w-10/12 mx-auto navbar'>
                <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl"><b>Keen</b>Keeper</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-2">
 
                    <li><Link onClick={()=> setcolor('activ')} 
                     className={`${color  === 'activ' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`}to='/'><RiHome2Line/>Home</Link></li>

                    <li> <Link onClick={()=> setcolor('timeline')} 
                    className={`${color === 'timeline' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`}to='/Timeline'><MdOutlineWatchLater/>Timeline</Link></li>

                    <li><Link onClick={()=> setcolor('stats')}
                     className={`${color === 'stats' ? 'bg-[#244D3F] text-white'
                  : 'bg-transparent'
                }`}to='/Stats'><TfiStatsUp/>Stats</Link></li>


                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navber;




