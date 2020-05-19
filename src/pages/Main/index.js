import React, { useEffect } from 'react';

import Navbar from '../../components/Navbar';

import Home from '../../components/Home';

export default function Main() {



    return (
        <>
            <Navbar />
            <div style={{ height: '100vh' }}>
                <Home />
            </div>
            <div style={{ height: '100vh' }}>

            </div>
        </>
    );
}