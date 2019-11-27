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

export default function Login() {
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
                        <Button>Entrar</Button>
                    </DivButton>
                </Form>
            </DivContant>
        </DivContainer>
    );
}
