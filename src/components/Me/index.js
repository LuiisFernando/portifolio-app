import React from 'react';

import { 
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaRedditAlien,
    FaFacebookF 
} from 'react-icons/fa'

import mePic from '../../assets/me2.png';

import { Container, Row, Avatar, AvatarImg, About, Wrap, Title } from './styles';
import { Element } from 'react-scroll';

export default function Me() {

    return (
        <Element id="section2">
            <Container>
                <Row>
                    <Avatar>
                        <AvatarImg src={mePic} />
                    </Avatar>
                    <About>
                        <Wrap>
                            <Title>
                                <h2>Me</h2>
                            </Title>
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
                                <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/LuiisFernando">
                                    <FaGithub color="#FFF" size={25} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/luís-fernando-r-souza-05b58345">
                                    <FaLinkedinIn color="#FFF" size={25} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/luisfernandors">
                                    <FaInstagram color="#FFF" size={25} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/jacktheriipper999">
                                    <FaRedditAlien color="#FFF" size={25} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/luiisfernando.rs">
                                    <FaFacebookF color="#FFF" size={25} />
                                </a>
                            </div>
                        </Wrap>
                    </About>
                </Row>
            </Container>
        </Element>
    );
}