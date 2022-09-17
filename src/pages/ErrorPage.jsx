import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/ui/Button";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 20px;
  gap: 50px;
`;

const ErrorTitle = styled.div`
  font-size: 50px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/");
  };

  return (
    <ErrorPageWrapper>
      <ErrorTitle>페이지를 이용할 수 없습니다</ErrorTitle>
      <Button width={"200px"} height={"50px"} onClick={onClickGoHome}>
        홈으로 가기
      </Button>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
