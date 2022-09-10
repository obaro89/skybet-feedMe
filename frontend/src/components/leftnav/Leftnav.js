import React from "react";
import { Link } from "react-router-dom";
import { StyledLeftNav } from "./leftnav.styled";
import StarIcon from "@mui/icons-material/Star";

const Leftnav = () => {
  return (
    <StyledLeftNav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Sky Bet Club</li>
        <li>In-Play</li>
        <li>Group Bets</li>
        <Link to="/Football">
          <li>Football</li>
          <StarIcon sx={{ color: "#FFE600" }} />
        </Link>
        <Link to="/Tennis">
          <li>Tennis</li>
          <StarIcon sx={{ color: "#FFE600" }} />
        </Link>
        <li>American Football</li>
        <li>Aussie Rules</li>
        <Link to="/Baseball">
          <li>Baseball</li>
        </Link>
        <Link to="/Basketball">
          {" "}
          <li>Basketball</li>
        </Link>
        <li>Bowls</li>
        <li>Boxing</li>
        <li>Cricket</li>
        <li>Cycling</li>
        <li>Darts</li>
        <li>ESports</li>
        <li>Formula 1</li>
        <li>Gaelic Games</li>
        <li>Golf</li>
        <li>Greyhound Racing</li>
        <li>Handball</li>
        <li>Horse Racing</li>
        <li>Ice Hockey</li>
        <li>Lotto</li>
        <li>Motor Sport</li>
        <li>Netball</li>
      </ul>
    </StyledLeftNav>
  );
};

export default Leftnav;
