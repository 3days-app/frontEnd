import React, { useMemo } from "react";
import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";


const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
`;

const Base = styled.span`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ ml }) => ml && `margin-left: ${ml}px`};
  ${({ mr }) => mr && `margin-right: ${mr}px`};
  ${({ rounded }) => rounded && "border-radius: 8px 0"};
  ${({ circle }) => circle && "border-radius: 50%"};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton = ({
  animation = true,
  width,
  height,
  circle,
  rounded,
  count,
  unit = "px",
  color = "#D9D9D9",
  style,
  mr,
  ml,
}) => {
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count]
  );

  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
      mr={mr}
      ml={ml}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;
