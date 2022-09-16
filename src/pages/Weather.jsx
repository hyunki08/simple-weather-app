import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import WeatherIcon from "../components/ui/WeatherIcon";

const testData = {
  temperature: "+28 °C",
  wind: "4 km/h",
  description: "Partly cloudy",
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 20px;
  gap: 10px;
`;

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const param = useParams();

  const fetchWeather = async () => {
    try {
      const { region } = param;
      // const res = await fetch("http://localhost:5000/weather/" + region).then(res => res.json());
      const res = testData;
      console.log(res);
      setWeather(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!param || !param.region) return;
    fetchWeather();
  }, []);

  return !loading ? (
    <WeatherWrapper>
      <WeatherIcon {...weather} size={100} />
    </WeatherWrapper>
  ) : (
    <div>Loading...</div>
  );
};

export default Weather;
