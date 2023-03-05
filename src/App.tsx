import styled from "styled-components";
import { NavBar } from "./assets/NavBar";

import { AppStateContext } from "./Providers/AppStateProvider";
import { About } from "./Pages/About/About";
import { useContext } from "react";
import { Work } from "./Pages/Work/Work";
import { Contact } from "./Pages/Contact/Contact";
import { Logo } from "./Logo";

const ContentWrapper = styled.div`
  max-width: 950px;
  margin: 2rem auto;
  overflow-y: scroll;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  h1 {
    color: #ec9929;
    font-size: 32px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const getContent = (currentPage: string): JSX.Element => {
  switch (currentPage) {
    case "About":
      return <About />;
    case "Services":
      return <Work />;
    case "Contact":
      return <Contact />;
  }
  return <></>;
};

const App = () => {
  const { currentPage } = useContext(AppStateContext);
  const page = getContent(currentPage);
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>{page}</ContentWrapper>
      <Logo />
    </Wrapper>
  );
};

export default App;
