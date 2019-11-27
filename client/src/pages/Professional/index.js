import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import Box from '../../components/Box';
import Modal from '../../components/Modal';
import { Title } from '../../styles/styles';

export default function Professional() {
    const [opened, setOpened] = useState(false);

    return (
        <Container>
            <Box>
                <Link to="/profissionais" className="link">
                    <div className="back">
                        <div className="icon">
                            <IoIosArrowBack />
                        </div>
                        Voltar
                    </div>
                </Link>
                <Title>Thiago Fialho</Title>
                <div className="content-box">
                    <div className="profile">
                        <div className="image" />
                    </div>
                    <div className="description">
                        <div className="item">
                            <div className="text">Nome:</div>Thiago Fialho
                        </div>
                        <div className="item">
                            <div className="text">Endereço:</div>Rua 9 de julho,
                            198
                        </div>
                        <div className="item">
                            <div className="text">Cidade:</div>Olimpia
                        </div>
                        <div className="item">
                            <div className="text">CEP:</div>15.400/000
                        </div>
                        <div className="item">
                            <div className="text">Especialidade:</div>NodeJS,
                            ReactJs, Birl language
                        </div>
                        <div className="item">
                            <div className="text">Sobre:</div>Apaixonado por
                            tecnoligia querendo introduzir ela de maneira facil
                            e extrovertida para os adolecentes indecisos quanto
                            sua futura formação
                        </div>
                        <div className="item">
                            <div className="text">Celular:</div>(17) 99123-4567
                        </div>
                        <div className="controls">
                            <button
                                type="button"
                                onClick={() => setOpened(true)}
                            >
                                Conectar
                            </button>
                        </div>
                    </div>
                </div>
            </Box>

            <Modal open={opened}>
                {console.log('passando', opened)}
                <div className="content-modal">
                    <Title>Conexão feita com sucesso !!!</Title>
                    <div className="connection">
                        <div className="image first" />
                        <div className="image second" />
                    </div>
                    <div className="controls">
                        <button type="button">Voltar</button>
                    </div>
                </div>
            </Modal>
        </Container>
    );
}
