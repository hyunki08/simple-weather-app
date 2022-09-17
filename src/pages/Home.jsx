import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { RegionsContext } from "../context/regionContext";
import { CloseOutlined } from "@ant-design/icons";

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

const SearcedRecords = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
`;

const SearchedRecordTitle = styled.div`
  padding: 5px 15px;
  font-weight: 600;
  color: #888;
  font-size: 18px;
`;

const SearchedRecordItem = styled.div`
  display: inline-flex;
  gap: 2px;
  align-items: center;
`;

const SearchedRecordItemRegion = styled.div`
  padding: 5px 2px 5px 15px;
  font-weight: 600;
  color: #888;
  font-size: 18px;
  cursor: pointer;
`;

const Home = () => {
  const { regions, removeRegion } = useContext(RegionsContext);
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

  const onClickSearched = region => {
    navigate("/weather/" + region);
  };

  const onClickRemove = region => {
    removeRegion(region);
  };

  return (
    <HomeWrapper>
      <Form onSubmit={onClickSubmit}>
        <TextInput height={"40px"} width={"calc(100% - 50px)"} placeholder={"Jeju"} value={value} onChange={onChangeValue} />
        <Button type="submit" height={"40px"} width={"calc(100% - 20px)"}>
          검색
        </Button>
      </Form>
      {!!regions && (
        <SearcedRecords>
          <SearchedRecordTitle>최근 검색 기록 :</SearchedRecordTitle>
          {regions.map((region, index) => (
            <SearchedRecordItem key={index}>
              <SearchedRecordItemRegion onClick={() => onClickSearched(region)}>{region}</SearchedRecordItemRegion>
              <CloseOutlined onClick={() => onClickRemove(region)} style={{ color: "#888", cursor: "pointer", padding: "5px", fontSize: "14px" }} />
            </SearchedRecordItem>
          ))}
        </SearcedRecords>
      )}
    </HomeWrapper>
  );
};

export default Home;
