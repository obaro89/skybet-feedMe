import React from "react";
import { StyledFixture } from "./fixture.styled";
import moment from "moment";

const Fixture = ({ event }) => {
  const { name, startTime, eventId, category } = event;

  return (
    <StyledFixture to={`/${category}/event/${eventId}`}>
      <span>{moment.utc(startTime).format("LT")}</span>
      <p>{name}</p>
    </StyledFixture>
  );
};

export default Fixture;
