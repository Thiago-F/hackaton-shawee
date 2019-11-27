import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from "./styles";

import Box from '../../components/Box';
export default function Home() {
    return (
        <>
            <Box>
                <h1>Logar como:</h1>
                <Link to="/escola">Profissionais</Link>
                <Link to="/profissionais">Escola</Link>
            </Box>
        </>
    );
}
