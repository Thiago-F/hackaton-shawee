import styled from 'styled-components';

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const DivContant = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    max-height: 300px;
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
`;

export const Ul = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    margin-left: 30px;
`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Strong = styled.strong`
    font-size: 24px;
    color: #444;
    margin: 10px;
`;

export const Label = styled.label`
    margin-top: 10px;
    font-size: 24px;
    color: #444;
    /* font-size: 15px; */
    color: #999;
`;

export const Button = styled.button`
    border: 0;
    border-radius: 5px;
    width: 30%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #000080;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;

    :hover {
        background: #4169e1;
    }
`;
