import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../categories/Categories";
import Content from "../content/Content";
import Event from "../event/Event";
import Fixtures from "../fixtures/Fixtures";
import Leftnav from "../leftnav/Leftnav";
import { StyledContainer } from "./container.styled";

const Container = () => {
  return (
    <StyledContainer>
      <Leftnav />
      <Routes>
        <Route path="/" element={<Content />}>
          <Route path="" element={<Categories />} />
          <Route path=":category" element={<Fixtures />} />
          <Route path=":category/event/:eventId" element={<Event />} />
        </Route>
      </Routes>
    </StyledContainer>
  );
};

export default Container;
