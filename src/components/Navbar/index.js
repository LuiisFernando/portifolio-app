import React from 'react';

import { Container, Menu } from './styles';

export default function Navbar() {
    return (
        <Container>
            <Menu>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </Menu>
        </Container>
    );
}