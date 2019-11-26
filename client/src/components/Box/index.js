import React from "react";

import { Container } from "./styles";

export default function Box({ children }) {
  return (
    <Container>
      <div className="back">
        <div className="icon">X</div>
        Voltar
      </div>
      {children}
    </Container>
  );
}
