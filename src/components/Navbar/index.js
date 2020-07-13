import React from 'react';
import { Link, animateScroll } from 'react-scroll';

import { Container, Menu } from './styles';

export default function Navbar() {

    return (
        <Container>
            <Menu>
                <ul>
                    <li className="nav-item">
                        <Link 
                            to="section1"
                            spy={true}
                            smooth={true} 
                            offset={-50} 
                            duration={500}
                            activeClass="active"
                            >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="section2"
                            spy={true}
                            smooth={true} 
                            offset={-50} 
                            duration={500}
                            activeClass="active"
                            >
                            Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="section3"
                            spy={true}
                            smooth={true} 
                            offset={-50} 
                            duration={500}
                            activeClass="active"
                            >
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="section5"
                            spy={true}
                            smooth={true} 
                            offset={-50} 
                            duration={500}
                            activeClass="active"
                            >
                            Contact
                        </Link>
                    </li>
                </ul>
            </Menu>
        </Container>
    );
}