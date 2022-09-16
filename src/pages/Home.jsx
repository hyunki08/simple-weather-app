import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 20px;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
  width: 100%;
  gap: 10px;
`;

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  useTitle("Simple Weather App");

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const onClickSubmit = e => {
    e.preventDefault();
    if (!value || value === "") {
      alert("지역을 입력하세요.");
      return;
    }

    navigate("/weather/" + value);
  };

  return (
    <HomeWrapper>
      <Form onSubmit={onClickSubmit}>
        <TextInput height={"40px"} width={"calc(100% - 50px)"} placeholder={"Jeju"} value={value} onChange={onChangeValue} />
        <Button type="submit" height={"40px"} width={"calc(100% - 20px)"}>
          검색
        </Button>
      </Form>
    </HomeWrapper>
  );
};

export default Home;
