import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFixture = styled(Link)`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #eff4fb;
  display: flex;
  align-items: center;
  text-decoration: none;

  span {
    margin: 0 80px 0 80px;
    font-size: 12px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
  }
`;
