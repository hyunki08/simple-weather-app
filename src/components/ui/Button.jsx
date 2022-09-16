import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 20px;
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  background-color: #aac4ff;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
`;

const Button = ({ children, onClick, height, width }) => {
  return (
    <StyledButton height={height} width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
