import React from 'react';

import { Container } from './styles';

export default function Aside() {
    return (
        <Container>
            <header>
                <div className="avatar" />
            </header>
            <div className="menu-options">
                <div className="option">
                    <div className="icon">X</div>
                    Option 1
                </div>
                <div className="option">
                    <div className="icon">X</div>
                    Option 2
                </div>
                <div className="option">
                    <div className="icon">X</div>
                    Option 3
                </div>
            </div>
            <div className="logout">Sair</div>
        </Container>
    );
}
