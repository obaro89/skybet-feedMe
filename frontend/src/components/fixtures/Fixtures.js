import React, { useContext, useEffect, useState } from "react";
import { StyledFixtures } from "./fixtures.styled";
import { useParams } from "react-router-dom";
import { EventContext } from "../../contexts/event.context";
import Fixture from "../fixture/Fixture";
import moment from "moment";
import { getEventByCategory } from "../../actions";

const Fixtures = () => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categorizedEvents, setCategorizedEvents] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const events = await getEventByCategory(category);
      setCategorizedEvents(events);
      setIsLoading(false);
    })();
  }, [category]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <StyledFixtures>
      <h5>{moment().format("MMMM Do YYYY")}</h5>
      {categorizedEvents.map((event) => (
        <Fixture event={event} key={event._id} />
      ))}
    </StyledFixtures>
  );
};

export default Fixtures;
