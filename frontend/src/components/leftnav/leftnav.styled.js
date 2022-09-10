import styled from "styled-components";

export const StyledLeftNav = styled.nav`
  flex-grow: 0.7;
  background-color: #020231;

  ul {
    color: white;
    font-size: 18px;
    padding: 20px;

    li {
      list-style-type: none;
      margin-top: 10px;
      margin-bottom: 30px;
    }
    a {
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: space-between;
    }
  }
`;
