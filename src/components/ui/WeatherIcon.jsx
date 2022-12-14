import React from "react";
import { WiSnow, WiThunderstorm, WiSleet, WiRain, WiShowers, WiFog, WiCloudy, WiDayCloudy, WiDaySunny, WiRefresh } from "weather-icons-react";

const WeatherIcon = ({ description, size, color }) => {
  if (description === "Moderate or heavy snow in area with thunder") return <WiSnow size={size} color={color} />;
  else if (description === "Patchy light snow in area with thunder") return <WiSnow size={size} color={color} />;
  else if (description === "Moderate or heavy rain in area with thunder") return <WiThunderstorm size={size} color={color} />;
  else if (description === "Patchy light rain in area with thunder") return <WiThunderstorm size={size} color={color} />;
  else if (description === "Moderate or heavy showers of ice pellets") return <WiSleet size={size} color={color} />;
  else if (description === "Light showers of ice pellets") return <WiSleet size={size} color={color} />;
  else if (description === "Moderate or heavy snow showers") return <WiSnow size={size} color={color} />;
  else if (description === "Light snow showers") return <WiSnow size={size} color={color} />;
  else if (description === "Moderate or heavy sleet showers") return <WiSleet size={size} color={color} />;
  else if (description === "Light sleet showers") return <WiSleet size={size} color={color} />;
  else if (description === "Torrential rain shower") return <WiRain size={size} color={color} />;
  else if (description === "Moderate or heavy rain shower") return <WiShowers size={size} color={color} />;
  else if (description === "Light rain shower") return <WiShowers size={size} color={color} />;
  else if (description === "Ice pellets") return <WiSleet size={size} color={color} />;
  else if (description === "Heavy snow") return <WiSnow size={size} color={color} />;
  else if (description === "Patchy heavy snow") return <WiSnow size={size} color={color} />;
  else if (description === "Moderate snow") return <WiSnow size={size} color={color} />;
  else if (description === "Patchy moderate snow") return <WiSnow size={size} color={color} />;
  else if (description === "Light snow") return <WiSnow size={size} color={color} />;
  else if (description === "Patchy light snow") return <WiSnow size={size} color={color} />;
  else if (description === "Moderate or heavy sleet") return <WiSnow size={size} color={color} />;
  else if (description === "Light sleet") return <WiSleet size={size} color={color} />;
  else if (description === "Moderate or Heavy freezing rain") return <WiSleet size={size} color={color} />;
  else if (description === "Light freezing rain") return <WiSleet size={size} color={color} />;
  else if (description === "Heavy rain") return <WiRain size={size} color={color} />;
  else if (description === "Heavy rain at times") return <WiShowers size={size} color={color} />;
  else if (description === "Moderate rain") return <WiRain size={size} color={color} />;
  else if (description === "Moderate rain at times") return <WiShowers size={size} color={color} />;
  else if (description === "Light rain") return <WiRain size={size} color={color} />;
  else if (description === "Patchy light rain") return <WiRain size={size} color={color} />;
  else if (description === "Heavy freezing drizzle") return <WiSleet size={size} color={color} />;
  else if (description === "Freezing drizzle") return <WiSleet size={size} color={color} />;
  else if (description === "Light drizzle") return <WiRain size={size} color={color} />;
  else if (description === "Patchy light drizzle") return <WiShowers size={size} color={color} />;
  else if (description === "Freezing fog") return <WiFog size={size} color={color} />;
  else if (description === "Fog") return <WiFog size={size} color={color} />;
  else if (description === "Blizzard") return <WiSnow size={size} color={color} />;
  else if (description === "Blowing snow") return <WiSnow size={size} color={color} />;
  else if (description === "Thundery outbreaks in possible") return <WiThunderstorm size={size} color={color} />;
  else if (description === "Patchy freezing drizzle possible") return <WiSleet size={size} color={color} />;
  else if (description === "Patchy sleet possible") return <WiSleet size={size} color={color} />;
  else if (description === "Patchy snow possible") return <WiSleet size={size} color={color} />;
  else if (description === "Patchy rain possible") return <WiShowers size={size} color={color} />;
  else if (description === "Mist") return <WiFog size={size} color={color} />;
  else if (description === "Overcast") return <WiCloudy size={size} color={color} />;
  else if (description === "Cloudy") return <WiCloudy size={size} color={color} />;
  else if (description === "Partly cloudy") return <WiDayCloudy size={size} color={color} />;
  else if (description === "Clear") return <WiDaySunny size={size} color={color} />;
  else if (description === "Sunny") return <WiDaySunny size={size} color={color} />;
  else return <WiRefresh size={size} color={color} />;
};

export default WeatherIcon;
