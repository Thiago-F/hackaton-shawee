import styled from 'styled-components';

export const DivContainer = styled.div`
    /* margin: 100px auto 0; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const DivContant = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    max-height: 300px;
    /* height: 100%; */
    /* width: 100%; */

    min-width: 500px;
    min-height: 300px;

    background: #fff;
    border-radius: 8px;
    /* padding: 30px; */
    /* margin: 5px; */
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
`;

export const LabelLogin = styled.label`
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const InputEmail = styled.input`
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
    width: 100%;
`;

export const Button = styled.button`
    display: flex;
    border: 0;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #000080;
    color: #fff;
    margin: 5px;
    cursor: pointer;

    :hover {
        background: #4169e1;
    }
`;

export const DivButton = styled.div`
    display: flex;
    flex: wrap;
    justify-content: space-between;
`;
