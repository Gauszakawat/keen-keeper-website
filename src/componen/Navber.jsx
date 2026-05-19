
import React, { useState } from 'react';
import { MdOutlineWatchLater } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link } from 'react-router';

const Navber = () => {

    const [color, setcolor] = useState('activ');

    return (
        <div className="navbar bg-white shadow-sm">

            <div className='w-11/12 mx-auto flex items-center justify-between py-2'>

                <div>
                    <Link
                        to='/'
                        className="text-lg sm:text-2xl font-semibold"
                    >
                        <b>Keen</b>Keeper
                    </Link>
                </div>

                <div>

                    <ul className="flex items-center gap-1 sm:gap-3">

                        <li>
                            <Link
                                onClick={() => setcolor('activ')}
                                className={`flex items-center gap-1 rounded-lg px-2 py-2 text-[10px] sm:text-sm md:text-base transition-all duration-300 ${color === 'activ'
                                        ? 'bg-[#244D3F] text-white'
                                        : 'bg-transparent'
                                    }`}
                                to='/'
                            >
                                <RiHome2Line className="text-sm sm:text-base" />

                                <span className="hidden sm:block">
                                    Home
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => setcolor('timeline')}
                                className={`flex items-center gap-1 rounded-lg px-2 py-2 text-[10px] sm:text-sm md:text-base transition-all duration-300 ${color === 'timeline'
                                        ? 'bg-[#244D3F] text-white'
                                        : 'bg-transparent'
                                    }`}
                                to='/Timeline'
                            >
                                <MdOutlineWatchLater className="text-sm sm:text-base" />

                                <span className="hidden sm:block">
                                    Timeline
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => setcolor('stats')}
                                className={`flex items-center gap-1 rounded-lg px-2 py-2 text-[10px] sm:text-sm md:text-base transition-all duration-300 ${color === 'stats'
                                        ? 'bg-[#244D3F] text-white'
                                        : 'bg-transparent'
                                    }`}
                                to='/Stats'
                            >
                                <TfiStatsUp className="text-sm sm:text-base" />

                                <span className="hidden sm:block">
                                    Stats
                                </span>
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Navber;

