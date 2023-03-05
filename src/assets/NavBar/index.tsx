import styled from "styled-components";
import { NavButton } from "./NavButton";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 32px;
  padding-right: 16px;
`;

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavButton label="Home" />
      <NavButton label="About" />
      <NavButton label="Services" />
      <NavButton label="Contact" />
    </NavBarWrapper>
  );
};
