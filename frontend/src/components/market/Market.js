import React from "react";
import { StyledMarket } from "./market.styled";

const Market = ({ event }) => {
  const { markets } = event;
  return (
    <React.Fragment>
      {markets.map((market) => (
        <StyledMarket key={market._id}>
          <h2>{market.name}</h2>
          {market.outcomes.map((outcome) => (
            <p key={outcome._id}>
              <span>{outcome.name}</span>
              <span>
                <strong>{outcome.price}</strong>
              </span>
            </p>
          ))}
        </StyledMarket>
      ))}
    </React.Fragment>
  );
};

export default Market;
