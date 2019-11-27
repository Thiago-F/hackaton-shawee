import React, { useEffect } from 'react';

import { Container } from './styles';

export default function Modal({ children, open }) {
    useEffect(() => {
        console.log('res', open);
    }, open);

    return (
        <Container opened={open}>
            <div className="modal">{children}</div>
        </Container>
    );
}
