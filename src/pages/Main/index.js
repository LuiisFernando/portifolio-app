import React from 'react';

import { Element } from 'react-scroll';

import Navbar from '../../components/Navbar';

import Home from '../../components/Home';
import Me from '../../components/Me';

export default function Main() {



    return (
        <>
            <Navbar />
            <Element style={{ height: '100vh' }} id="section1">
                <Home />
            </Element>
            <Element id="section2">
                <Me />
            </Element>
            <Element style={{ height: '100vh' }} id="section3">

            </Element>
            <Element style={{ height: '100vh' }} id="section4">

            </Element>
        </>
    );
}