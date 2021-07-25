import styled from "styled-components";

export const StyledWrapper = styled.main`
  width: 100%;
`;

export const StyledHeader = styled.h1`
  padding: 1em 0;
  text-align: center;
`;

export const StyledScore = styled.h2`
  padding: 1em 0;
`;

export const StyledStartButton = styled.button`
  width: 100%;
  outline: transparent;
  border: none;
  padding: 2em;
  background-color: #75bbf1;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    background-color: #4aa5eb;
  }
`;

export const StyledNextButton = styled.button`
  width: 100%;
  outline: transparent;
  border: none;
  padding: 2em;
  margin-top: 5em;
  background-color: #75bbf1;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    background-color: #4aa5eb;
  }
`;
