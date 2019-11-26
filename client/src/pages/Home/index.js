import React from "react";

import { Container } from "./styles";

import Box from "../../components/Box";
import { Title } from "../../styles/styles";

export default function Home() {
  return (
    <Container>
      <Box>
        <Title>Profissionais</Title>

        <div className="professional-box">
          <div className="avatar">
            <div className="profile"></div>
          </div>
          <div className="content">
            <div className="item">
              <div className="text">
                <div className="title">Nome:</div>
                Thiago Fialho
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Localização:</div>
                São Paulo - SP
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Especialização:</div>
                <span className="tech">ReactJs</span>,
                <span className="tech">NodeJs</span>,
                <span className="tech">React Native</span>
              </div>
            </div>
            <div className="controls">
              <button type="button">Ver perfil</button>
              <button type="button">Contratar</button>
            </div>
          </div>
        </div>
        <div className="professional-box">
          <div className="avatar">
            <div className="profile"></div>
          </div>
          <div className="content">
            <div className="item">
              <div className="text">
                <div className="title">Nome:</div>
                Thiago Fialho
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Localização:</div>
                São Paulo - SP
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Especialização:</div>
                <span className="tech">ReactJs</span>,
                <span className="tech">NodeJs</span>,
                <span className="tech">React Native</span>
              </div>
            </div>
            <div className="controls">
              <button type="button">Ver perfil</button>
              <button type="button">Contratar</button>
            </div>
          </div>
        </div>
        <div className="professional-box">
          <div className="avatar">
            <div className="profile"></div>
          </div>
          <div className="content">
            <div className="item">
              <div className="text">
                <div className="title">Nome:</div>
                Thiago Fialho
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Localização:</div>
                São Paulo - SP
              </div>
            </div>
            <div className="item">
              <div className="text">
                <div className="title">Especialização:</div>
                <span className="tech">ReactJs</span>,
                <span className="tech">NodeJs</span>,
                <span className="tech">React Native</span>
              </div>
            </div>
            <div className="controls">
              <button type="button">Ver perfil</button>
              <button type="button">Contratar</button>
            </div>
          </div>
        </div>

        <div className="control">
          <div className="btn-arrow prev">X</div>
          <div className="btn-arrow next">X</div>
        </div>
      </Box>
    </Container>
  );
}
