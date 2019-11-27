import styled from 'styled-components';
import bground from '../../assets/background3.jpg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
    background: #000 url(${bground}) fixed;

    .link {
        text-decoration: none !important;
    }

    .back {
        cursor: pointer;
        color: #333;
    }

    .content-box {
        width: 100%;
        height: 100%;
        display: flex;

        .profile {
            display: flex;
            justify-content: center;
            width: 30%;

            .image {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }

        .description {
            width: 70%;
            .item {
                display: flex;
                padding: 5px;
                .text {
                    margin-right: 5px;
                    font-weight: bold;
                    font-size: 14px;
                }
            }
        }
    }
    .controls {
        button {
            border: 0;
            background-color: rgba(0, 0, 128, 0.7);
            color: #fff;
            border-radius: 2px;
            padding: 10px 15px;
            margin-top: 10px;
        }
    }

    .content-modal {
        /* border: 1px solid red; */

        .connection {
            /* border: 1px solid black; */
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 30px;

            .image {
                min-width: 150px;
                min-height: 150px;
                margin: 0 15px;

                border-radius: 50%;
            }

            .first {
                border: 1px solid black;
            }

            .second {
                border: 1px solid black;
            }
        }
    }
`;
