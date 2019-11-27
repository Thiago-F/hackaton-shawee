import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;

    display: ${({ opened }) => (opened ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);

    .modal {
        background-color: #fff;
        border-radius: 8px;

        max-width: 800px;
        max-height: 600px;
        padding: 30px;
    }
`;
