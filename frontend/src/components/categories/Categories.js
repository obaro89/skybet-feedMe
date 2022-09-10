import React, { useContext } from "react";
import Category from "../category/Category";
import { EventContext } from "../../contexts/event.context";

const Categories = () => {
  const { state } = useContext(EventContext);
  const { events } = state;
  const categoryKeys = Object.keys(events);
  return (
    <React.Fragment>
      {categoryKeys.map((element) => (
        <Category category={element} events={events[element]} key={element} />
      ))}
    </React.Fragment>
  );
};

export default Categories;
