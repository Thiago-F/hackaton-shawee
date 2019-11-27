import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  background-color: #000080;

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
    }
  }
`;
