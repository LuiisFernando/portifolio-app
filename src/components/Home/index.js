import React from 'react';
import Typist from 'react-typist';
import background from '../../assets/bcc.png';

import { Container } from './styles';

import '../../styles/stars.css';

export default function Home() {
    return (
        <Container background={background}>
            <div class="stars">
                <div>
                    <h1>Hello, I am Luís Fernando</h1>
                    <Typist cursor={{ show: false, blink: false }}>
                    <span> Front End Developer</span>
                        <Typist.Backspace count={19} delay={500} />
                        <span>Back End Developer</span>
                        <Typist.Backspace count={18} delay={500} />
                        <span>Mobile Developer</span>
                        <Typist.Backspace count={16} delay={500} />
                        <span>FullStack Developer</span>
                    </Typist>
                </div>
            </div>
            {/* <div class="twinkling"></div> */}
            
        </Container>
    );
}
