import React from 'react';

import { Container, Row, Title, Information, College } from './styles';
import { Element } from 'react-scroll';

export default function Resume() {
    return (
        <Element id="section3" style={{ height: '100vh' }}>
            <Container>
                <Row>
                    <Title>
                        <h2>Education</h2>
                    </Title>
                    <Information>
                        <College>
                            <h2>Veris IBTA - Brazilian institute of advanced technology</h2>
                            <p><span>Computer Science</span> • December 2014</p>
                        </College>
                    </Information>
                </Row>
                <Row>
                    <Title>
                        <h2>Work</h2>
                    </Title>
                    <Information>
                        <College>
                            <h2>RDC Viagens</h2>
                            <p><span>FullStack Developer</span> 2020/currently</p>
                        </College>
                        <College>
                            <h2>Fcamara</h2>
                            <p><span>FullStack Developer</span> 2019/2020</p>
                        </College>
                        <College>
                            <h2>Via Varejo</h2>
                            <p><span>FullStack Developer</span> 2018/2019</p>
                        </College>
                        <College>
                            <h2>GSW</h2>
                            <p><span>FullStack Developer</span> 2018/2018</p>
                        </College>
                        <College>
                            <h2>SoftWillians</h2>
                            <p><span>FullStack Developer</span> 2015/2018</p>
                        </College>
                        <College>
                            <h2>Vexon</h2>
                            <p><span>FullStack Developer</span> 2012/2015</p>
                        </College>
                    </Information>
                </Row>
                <Row>
                    <Title><h2>Skills</h2></Title>
                    <Information>
                        <College>
                            <h2>teste</h2>
                        </College>
                    </Information>
                </Row>
            </Container>
        </Element>
    );
}