import React from 'react';
import Typist from 'react-typist';
import background from '../../assets/bcc.png';

import { Container, Image } from './styles';

export default function Home() {
    return (
        <Container background={background}>
            <div>
                <h1>Hello, I am Luís Fernando</h1>
                <Typist cursor={{ show: false, blink: false }}>
                <span> Front End Developer</span>
                    <Typist.Backspace count={19} delay={200} />
                    <span>Back End Developer</span>
                    <Typist.Backspace count={18} delay={200} />
                    <span>Mobile Developer</span>
                    <Typist.Backspace count={16} delay={200} />
                    <span>FullStack Developer</span>
                </Typist>
            </div>
        </Container>
    );
}
