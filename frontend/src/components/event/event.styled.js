import styled from "styled-components";

export const StyledEvent = styled.div`
  width: 100%;

  div {
    background-color: #19377c;
    height: 300px;

    h4 {
      color: whitesmoke;
      font-weight: 500;
      font-size: 14px;
      border-bottom: 1px solid whitesmoke;
      padding: 20px;
    }
    p {
      display: flex;
      color: whitesmoke;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid whitesmoke;
      padding: 80px;
      font-weight: bolder;
      font-size: 18px;

      span {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  section {
    display: flex;
    padding: 20px;

    span {
      border: 1px solid gray;
      padding: 10px;
      margin-right: 10px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      width: auto;
    }
  }
`;
