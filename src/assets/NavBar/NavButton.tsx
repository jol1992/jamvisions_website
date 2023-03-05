import { FC, useContext } from "react";
import styled from "styled-components";
import { AppStateContext } from "../../Providers/AppStateProvider";
const ButtonWrapper = styled.button<{ isCurrentPage: boolean }>`
  background: unset;
  color: ${({ isCurrentPage }) => (isCurrentPage ? "#ec9929" : "#647887")};
  &:hover {
    color: #ec9929;
  }
`;
export const NavButton: FC<{ label: string }> = ({ label }) => {
  const { setCurrentPage, currentPage } = useContext(AppStateContext);
  const handleClick = () => {
    setCurrentPage(label);
  };
  return (
    <ButtonWrapper onClick={handleClick} isCurrentPage={currentPage === label}>
      {label}
    </ButtonWrapper>
  );
};
