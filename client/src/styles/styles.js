import styled from 'styled-components';

export const Title = styled.div`
    font-size: ${({ size }) => (size ? `${size}px` : '22px')};
    font-size: ${({ bold }) => bold || 'regular'};
`;
