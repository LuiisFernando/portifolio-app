import React from 'react';
import Typist from 'react-typist';

import { Container } from './styles';
import { Element } from 'react-scroll';

// import '../../styles/stars.css';

export default function Home() {

    const arry = ['Front End Developer', 'Back End Developer', 'React Native (mobile) Developer', 'Full Stack Developer'];

    return (
        <Element id="section1" style={{ height: '100vh' }}>
            <Container>
                {/* <div className="stars"> */}
                    <div className="container">

                        <div className="wrap">
                            <h1>I'm Luís Fernando</h1>

                            <Typist cursor={{ show: false, blink: false }}>
                                <span>{arry[0]}</span>
                                <Typist.Backspace count={arry[0].length} delay={500} />
                                <span>{arry[1]}</span>
                                <Typist.Backspace count={arry[1].length} delay={500} />
                                <span>{arry[2]}</span>
                                <Typist.Backspace count={arry[2].length} delay={500} />
                                <span>{arry[3]}</span>
                            </Typist>

                        </div>

                    </div>
                {/* </div> */}
                {/* <div class="twinkling"></div> */}
                
            </Container>
        </Element>
    );
}
