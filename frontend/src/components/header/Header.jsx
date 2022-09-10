import { StyledHeader } from "./header.styled";
import LogoBrand from "../../assests/skybetBrnads.PNG";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={LogoBrand} alt="" />
      </div>
    </StyledHeader>
  );
};

export default Header;
