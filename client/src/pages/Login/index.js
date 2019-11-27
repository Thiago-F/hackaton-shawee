/* eslint-disable react/prop-types */
import React from 'react';
import {
    DivContainer,
    DivContant,
    Form,
    LabelLogin,
    InputEmail,
    DivButton,
    Button,
} from './styled';

export default function Login({ history }) {
    function handleSubmit(event) {
        event.preventDefault();
        history.push('/home');
    }

    return (
        <DivContainer>
            <DivContant>
                <Form>
                    <LabelLogin>Email</LabelLogin>
                    <InputEmail
                        id="email"
                        type="email"
                        placeholder="Entre com seu e-mail"
                    />
                    <DivButton>
                        <Button>Cadastrar</Button>
                        <Button onClick={handleSubmit}>Entrar</Button>
                    </DivButton>
                </Form>
            </DivContant>
        </DivContainer>
    );
}
