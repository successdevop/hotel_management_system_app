import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 40px;
      font-weight: 600;
      color: yellow;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 500;
      color: green;
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      font-weight: 400;
      color: blue;
    `}

  &:hover {
    color: green;
    background-color: aqua;
  }

  &:active {
    box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.4);
  }
`;

export default Heading;
