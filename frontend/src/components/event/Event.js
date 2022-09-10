import React, { useContext, useEffect, useState } from "react";
import { StyledEvent } from "./event.styled";
import { useParams } from "react-router-dom";
import Market from "../market/Market";
import { getEventById } from "../../actions";
import { EventContext } from "../../contexts/event.context";
import moment from "moment";

const Event = () => {
  const { eventId } = useParams();

  const { state, setEvent } = useContext(EventContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const event = await getEventById(eventId);
      setIsLoading(false);
      setEvent(event);
    })();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  const { event } = state;
  const { name, category, startTime } = event[0];
  const [home, away] = name.split("vs");
  return (
    <StyledEvent>
      <div>
        <h4>
          {category} / {name}{" "}
        </h4>
        <p>
          {home.toUpperCase()} <span>{moment.utc(startTime).format("LT")}</span>
          {away.toUpperCase()}
        </p>
      </div>

      <section>
        <span>All</span>
        <span>RequestABet</span>
        <span>Cash Out</span>
        <span>Goals</span>
        <span>Shots</span>
        <span>Player</span>
        <span>Team</span>
        <span>Corners</span>
        <span>Cards</span>
      </section>

      <Market event={event[0]} />
    </StyledEvent>
  );
};

export default Event;
