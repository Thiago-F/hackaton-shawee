import { createGlobalStyle } from "styled-components";
import bground from "../assets/background3.jpg";

export default createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        outline : 0;
        box-sizing : border-box;
    }
    html, body, #root {
        min-height : 100%;

    }
    body {
        min-height : 100%;
        background: #000 url(${bground}) no-repeat;
        -webkit-font-smoothing : antialiased !important;
        background-size: cover;
    }
    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        cursor: pointer;
    }

`;
