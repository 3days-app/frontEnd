import styled from "@emotion/styled";
import React from "react";
import { keyframes, css } from "@emotion/react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  `;
const LoadingSpinner = styled.div`
  display: block;
  width: ${(props) => (props.size ? props.size : "70")}px;
  height: ${(props) => (props.size ? props.size : "70")}px;
  border: 7px solid var(--line-gray);
  border-radius: 100%;
  border-top-color: var(--main);
  animation: ${spin} 300ms linear infinite;
`;
const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default Loading;
