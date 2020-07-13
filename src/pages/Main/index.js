import React from 'react';

import Navbar from '../../components/Navbar';

import Home from '../../components/Home';
import Me from '../../components/Me';
import Resume from '../../components/Resume';

export default function Main() {



    return (
        <>
            <Navbar />
            <Home />
            <Me />
            <Resume />
            {/* <Element id="section1" style={{ height: '100vh' }}>
                <Home />
            </Element>
            <Element id="section2">
                <Me />
            </Element>
            <Element id="section3">
                <Resume />
            </Element>
            <Element id="section4">

            </Element>
            <Element id="section5">

            </Element> */}
        </>
    );
}