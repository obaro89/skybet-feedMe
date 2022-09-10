import styled from "styled-components";

export const StyledMarket = styled.main`
  display: flex;
  background-color: white;
  border: 1px solid #cccccc;
  margin: 4px;
  border-radius: 3px;
  flex-direction: column;

  h2 {
    font-size: 14px;
    background-color: #19377c;
    padding: 15px 30px 15px 30px;
    color: white;
  }

  p {
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #cccccc;

    span {
      border-right: 1px solid #cccccc;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 13px;
      font-weight: 600;
      &:last-child {
        border: none;
      }
      strong {
        padding-left: 5px;
        color: #d92231;
        font-weight: 700;
      }
    }
  }
`;
