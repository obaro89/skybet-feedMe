import React from "react";
import { StyledCategory } from "./category.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fixture from "../fixture/Fixture";

const Category = ({ category, events }) => {
  return (
    <StyledCategory>
      <h3>{category}</h3>
      {events.map((event) => (
        <Fixture key={event._id} event={event} />
      ))}
      <p>
        <span>View all {category} markets</span>
        <ArrowForwardIosIcon />
      </p>
    </StyledCategory>
  );
};

export default Category;
