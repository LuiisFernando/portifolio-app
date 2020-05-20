import React from 'react';

import mePic from '../../assets/me2.png';

import { Container, Row, Avatar, AvatarImg, About } from './styles';

export default function Me() {
    return (
        <Container>
            <Row>
                <Avatar>
                    <AvatarImg src={mePic} />
                </Avatar>
                <About>
                    <h2>Me</h2>
                    <p>
                        Hi, I'm Luís 28 years old, developer and gamer in free times.
                        <br />
                        I'm a developer since 2012 where I had my first job with C# .NET MVC and Web API.
                        <br />
                        Since that I worked with .NET, AngularJS, Angular 5+ and ReactJS.
                        <br />
                        Lately I have been study ReactJS and React Native I used to commit my codes on github
                    </p>
                    <hr />
                    <div className="platforms">
                        
                    </div>
                </About>
            </Row>
        </Container>
    );
}