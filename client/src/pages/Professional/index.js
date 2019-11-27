import React from "react";

import { Container } from "./styles";

import Box from "../../components/Box";
import { Title } from "../../styles/styles";

export default function Professional() {
  return (
    <Container>
      <Box>
        <Title>Thiago Fialho</Title>
        <div className="content-box">
          <div className="profile">
            <div className="image"></div>
          </div>
          <div className="description">
            <div className="item">
              <div className="text">Nome:</div>Thiago Fialho
            </div>
            <div className="item">
              <div className="text">Endereço:</div>Rua 9 de julho, 198
            </div>
            <div className="item">
              <div className="text">Cidade:</div>Olimpia
            </div>
            <div className="item">
              <div className="text">CEP:</div>15.400/000
            </div>
            <div className="item">
              <div className="text">Especialidade:</div>NodeJS, ReactJs, Birl
              language
            </div>
            <div className="item">
              <div className="text">Sobre:</div>Apaixonado por tecnoligia
              querendo introduzir ela de maneira facil e extrovertida para os
              adolecentes indecisos quanto sua futura formação
            </div>
            <div className="item">
              <div className="text">Celular:</div>(17) 99123-4567
            </div>
            <div className="controls">
              <button>Conectar</button>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}
