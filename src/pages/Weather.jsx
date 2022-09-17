import React, { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { EnvironmentOutlined, LoadingOutlined } from "@ant-design/icons";
import WeatherIcon from "../components/ui/WeatherIcon";
import { useTitle } from "../hooks/useTitle";
import { RegionsContext } from "../context/regionContext";
import Button from "../components/ui/Button";

const testData = {
  temperature: "+28 °C",
  wind: "4 km/h",
  description: "Sunny",
  forecast: [
    {
      day: "1",
      temperature: "+29 °C",
      wind: "8 km/h",
    },
    {
      day: "2",
      temperature: "27 °C",
      wind: "24 km/h",
    },
    {
      day: "3",
      temperature: " °C",
      wind: "22 km/h",
    },
  ],
};

const WeatherWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas:
    "region region region region region region"
    "icon icon temperature temperature temperature temperature"
    "icon icon description description description description"
    "line line line line line line"
    "forecast-0 forecast-0 forecast-1 forecast-1 forecast-2 forecast-2";
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: 0.8fr 1fr 1fr 0.1fr 1.3fr;
  gap: 5px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 75px);
  }
`;

const GridElement = styled.div`
  grid-area: ${props => props.area};
  ${props => props.center && Centered}
  display: flex;
  align-items: center;
`;

const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Region = styled.div`
  font-size: 26px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WeatherText = styled.div`
  ${props => (props.size ? `font-size:${props.size}` : `font-size:20px`)};
  ${props => props.align && `text-align:${props.align}`};
  ${props => (props.fontWeight ? `font-weight:${props.fontWeight}` : `font-weight: 600`)};
  text-align: center;
`;

const Line = styled.div`
  background-color: #e0e0e0;
  height: 2px;
  width: 100%;
`;

const WeatherForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 20px;
  gap: 50px;
`;

const NotFoundTitle = styled.div`
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  font-size: 50px;
  color: #888;
`;

const Weather = () => {
  const { addRegion } = useContext(RegionsContext);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const { region } = useParams();
  const navigate = useNavigate();
  const setTitle = useTitle("Loading...");

  const fetchWeather = useCallback(async () => {
    try {
      // const res = await fetch("http://localhost:5000/weather/" + encodeURI(region)).then(res => res.json());
      const res = testData;
      setWeather(res);
      setLoading(false);
      setTitle(region);
      addRegion(region);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [region, setTitle]);

  const onClickGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!region) return;
    fetchWeather();
  }, [region, fetchWeather]);

  return !loading ? (
    !!weather && !!weather.temperature && weather.temperature !== "" ? (
      <WeatherWrapper>
        <GridElement area="region">
          <Region>
            <EnvironmentOutlined style={{ paddingTop: "5px" }} />
            {region}
          </Region>
        </GridElement>
        <GridElement area="icon" center>
          <WeatherIcon {...weather} size={130} />
        </GridElement>
        <GridElement area="temperature">
          <WeatherText size={"46px"} fontWeight={700}>
            {weather.temperature}
          </WeatherText>
        </GridElement>
        <GridElement area="description">
          <WeatherText size={"30px"}>{weather.description}</WeatherText>
        </GridElement>
        <GridElement area="line">
          <Line />
        </GridElement>
        {weather.forecast.map((value, index) => (
          <GridElement key={index} area={`forecast-${index}`} center>
            <WeatherForecast>
              <WeatherText size={"24px"}>+{index + 1}D</WeatherText>
              <WeatherText size={"24px"}>{value.temperature}</WeatherText>
            </WeatherForecast>
          </GridElement>
        ))}
      </WeatherWrapper>
    ) : (
      <NotFoundWrapper>
        <NotFoundTitle>"{region}"에 대한 날씨 정보를 확인할 수 없습니다.</NotFoundTitle>
        <Button width={"200px"} height={"50px"} onClick={onClickGoHome}>
          홈으로 가기
        </Button>
      </NotFoundWrapper>
    )
  ) : (
    <Loading>
      <LoadingOutlined />
    </Loading>
  );
};

export default Weather;
