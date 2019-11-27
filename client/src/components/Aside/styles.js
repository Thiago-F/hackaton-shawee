import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 300px;
    /* padding: 30px; */
    position: relative;
    background-color: #000080;
    color: #fff;

    header {
        width: 100%;
        margin: 30px 0;
        display: flex;
        justify-content: center;

        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 1px solid black;
        }
    }

    .menu-options {
        margin-top: 30px;

        .option {
            width: 100%;
            padding: 15px;
            display: flex;
            font-size: 18px;
            cursor: pointer;

            .icon {
                margin-right: 15px;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        }
    }

    .logout {
        width: 100%;
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
