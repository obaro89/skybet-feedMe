import React from "react";
import Container from "../container/Container";
import Betslip from "../betslip/Betslip";
import { StyledMain } from "./main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Container />
      <Betslip />
    </StyledMain>
  );
};

export default Main;
