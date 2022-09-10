import React from "react";
import { StyledBetslip } from "./betslip.styled";

const Betslip = () => {
  return (
    <StyledBetslip>
      <h3>
        <span>0</span> My Bet Slip
      </h3>
      <div>
        <h4>You have no selections in your Bet Slip</h4>
      </div>
    </StyledBetslip>
  );
};

export default Betslip;
