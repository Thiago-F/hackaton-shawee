import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import api from "../../services/api";
import {
  Ul,
  Li,
  Label,
  Button,
  DivContainer,
  DivContant,
  Strong
} from "./styled";

export default function Escola() {
  // const [spots, setSpots] = useState([]);

  // useEffect(() => {
  //   async function loadSpots() {
  //     const user_id = localStorage.getItem("user");
  //     const response = await api.get("/dashboard", {
  //       headers: { user_id }
  //     });

  //     setSpots(response.data);
  //   }

  //   loadSpots();
  // }, []);

  const escolas = [1, 2, 3, 4];

  return (
    <>
      {escolas.map(escola => (
        <DivContainer>
          <DivContant>
            <Ul className="spot-list">
              <Li key="1">
                <Strong>
                  Escola: <Label>E.M ABEL MARTINS</Label>
                </Strong>
                <Strong>
                  Responsavel: <Label>DURVAL FULANO PRINTES</Label>
                </Strong>
              </Li>
            </Ul>
            <Link to="/new">
              <Button className="btn">Detalhes</Button>
            </Link>
          </DivContant>
        </DivContainer>
      ))}
    </>
  );
}
