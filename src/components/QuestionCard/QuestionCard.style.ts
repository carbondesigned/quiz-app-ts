import styled from "styled-components";

export const StyledQuestionCard = styled.section`
  width: 100%;
  box-shadow: 0 1.4px 2.2px rgba(0, 0, 0, 0.02),
    0 3.3px 5.3px rgba(0, 0, 0, 0.028), 0 6.3px 10px rgba(0, 0, 0, 0.035),
    0 11.2px 17.9px rgba(0, 0, 0, 0.042), 0 20.9px 33.4px rgba(0, 0, 0, 0.05),
    0 50px 80px rgba(0, 0, 0, 0.07);

  padding: 5em;
  border-radius: 2em;
`;

export const StyledQuestionNumber = styled.h3`
  padding: 0.2em 0;
`;
export const StyledQuestion = styled.p`
  padding: 0.5em 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 1em 0;
`;

type ButtonProps = {
  correct: boolean;
  userClicked: boolean;
};

export const StyledAnswerOption = styled.button<ButtonProps>`
  outline: transparent;
  border: none;
  border-radius: 0.2em;
  background: ${({ correct, userClicked }) =>
    correct ? "#68A691" : !correct && userClicked ? "#D62828" : "#E7E7E7"};
  width: 100%;
  padding: 1em 0;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    background: ${({ correct, userClicked }) =>
      correct ? "#769F92" : !correct && userClicked ? "#DC5F5F" : "#ddd"};
  }
`;
