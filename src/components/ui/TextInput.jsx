import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  padding: 15px;
  font-size: 20px;
  border: 1px solid #d2daff;
  border-radius: 10px;

  &:focus {
    border: 1px solid #aac4ff;
  }
`;

const TextInput = ({ type = "text", height, width, placeholder }) => {
  return <StyledInput type={type} height={height} width={width} placeholder={placeholder} />;
};

export default TextInput;
