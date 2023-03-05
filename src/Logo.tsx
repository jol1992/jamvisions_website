import { useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from "./Providers/AppStateProvider";
import jam from "./assets/jamVisions_small.png";

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;

  transform: translate(-50%, -50%);
  img {
    max-width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Logo = () => {
  const { currentPage } = useContext(AppStateContext);
  return (
    <ContentWrapper>
      <img
        src={jam}
        style={{ opacity: `${currentPage === "Home" ? "1" : "0.2"}` }}
      />
    </ContentWrapper>
  );
};
