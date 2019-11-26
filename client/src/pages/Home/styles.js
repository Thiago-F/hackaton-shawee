import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;
  background-color: #000080;

  .professional-box {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    display: flex;
    border-radius: 4px;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      /* width: 30%; */
      /* min-width: 80px; */
      /* border: 1px solid black; */

      .profile {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid black;
      }
    }

    .content {
      .item {
        font-size: 14px;
        .icon {
        }
        .text {
          display: flex;
          .title {
            font-weight: bold;
            margin-right: 5px;
          }
        }
      }
      .controls {
        margin-top: 10px;
        text-align: right;

        button {
          border: 0;
          background-color: rgba(0, 0, 128, 0.7);
          color: #fff;
          border-radius: 2px;
          padding: 10px 15px;
          margin-left: 10px;
        }
      }
    }
  }

  .control {
    margin-top: 10px;
    display: flex;
    padding: 10px;
    justify-content: center;

    .btn-arrow {
      background-color: #fff;
      border: 1px solid black;
      padding: 5px;
      border-radius: 2px;
      margin: 0 4px;
      cursor: pointer;

      .prev {
      }
      .next {
      }
    }
  }
`;
