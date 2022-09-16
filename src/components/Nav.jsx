import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #aac4ff;
  box-shadow: 1px;
  display: flex;
  flex-direction: row;
  justify-content: left;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const HomeButton = styled.a`
  width: 200px;
  padding: 20px;
  font-size: 20px;
  font-weight: 800;
  align-self: center;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };

  return (
    <NavWrapper>
      <HomeButton onClick={onClickHome}>Simple Weather App</HomeButton>
    </NavWrapper>
  );
};

export default Nav;
