import React from "react";
import { Outlet } from "react-router-dom";
import { StyledContent } from "./content.styled";
import Logo from "../../assests/skybet-rebrand.png";

const Content = () => {
  return (
    <StyledContent>
      <h5>
        <img src={Logo} alt="logo" />
      </h5>
      <div>
        <Outlet />
      </div>
    </StyledContent>
  );
};

export default Content;
