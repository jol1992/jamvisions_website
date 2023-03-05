import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #344855;
  padding: 1rem;
  background-color: #d9d9d9;
  max-width: 30rem;
  padding: 1rem;
  border-radius: 5px;
  gap: 10px;
  input {
    height: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.input`
  all: unset;
  background-color: #ec9929;
  padding: 0.5rem 1rem;
  width: 4rem;
  border-radius: 5px;
  text-align: center;
  margin-left: auto;
  margin-top: 1rem;
  color: white;
`;

const Wrapper = styled.div<{ isShowing: boolean }>`
  transition: opacity 0.5s;
  opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};
`;

export const Contact = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
  }, []);
  return (
    <Wrapper isShowing={isShowing}>
      <h1>Contact</h1>
      {/* <StyledForm>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Request</label>
          <textarea rows={10}></textarea>
        </div>
        <SubmitButton type="submit" />
      </StyledForm> */}
      Email us at:
    </Wrapper>
  );
};
