import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { EnvironmentOutlined } from "@ant-design/icons";
import WeatherIcon from "../components/ui/WeatherIcon";
import { useTitle } from "../hooks/useTitle";

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
  grid-template-areas:
    "region region region region region region"
    "icon temperature temperature temperature temperature temperature"
    "icon description description description description description"
    "line line line line line line"
    "forecast-0 forecast-0 forecast-1 forecast-1 forecast-2 forecast-2";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.8fr 1fr 1fr 0.1fr 1.3fr;
  gap: 5px;
  padding: 15px 30% 0 30%;
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

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const setTitle = useTitle("Loading...");

  const fetchWeather = async () => {
    try {
      const { region } = params;
      // const res = await fetch("http://localhost:5000/weather/" + encodeURI(region)).then(res => res.json());
      const res = testData;
      console.log(res);
      setTitle(region);
      setWeather(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!params || !params.region) return;
    fetchWeather();
  }, []);

  return !loading ? (
    !!weather && !!weather.temperature && weather.temperature !== "" ? (
      <WeatherWrapper>
        <GridElement area="region">
          <Region>
            <EnvironmentOutlined style={{ paddingTop: "5px" }} />
            {params.region}
          </Region>
        </GridElement>
        <GridElement area="icon">
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
      <div>Not Found</div>
    )
  ) : (
    <div>Loading...</div>
  );
};

export default Weather;
