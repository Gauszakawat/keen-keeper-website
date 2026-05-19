import React from 'react';
import { Outlet } from 'react-router';
import Navber from './././../componen/Navber'
import Footer from './././../componen/Footer'

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;