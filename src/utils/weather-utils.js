import CloudyDayIcon from "../assets/icons/weather/cloudy-day.svg?react";
import CloudyIcon from "../assets/icons/weather/cloudy.svg?react";
import ClearDayIcon from "../assets/icons/weather/clear-day.svg?react";
import CloudyWithRain from "../assets/icons/weather/cloudy-with-rain.svg?react";

const weatherConfig = [
  {
    keywords: ["пасмурно", "облачно", "тучи"],
    gradientClassName: "cloudy",
    icon: "cloudy", // cloudy.svg
  },
  {
    keywords: [
      "облачно с прояснениями",
      "переменная облачность",
      "небольшая облачность",
    ],
    gradientClassName: "partly-cloudy",
    icon: "partly-cloudy", // cloudy-day.svg
  },
  {
    keywords: ["ясно", "солнечно", "чистое небо"],
    gradientClassName: "sunny",
    icon: "sunny", // clear-day.svg
  },
  {
    keywords: ["дождь", "ливень", "моросящий дождь", "небольшой дождь"],
    gradientClassName: "rain",
    icon: "rain", // cloudy-with-rain.svg
  },
];

export const getWeatherUi = (description) => {
  if (!description) return "";

  const normalizeDesc = description.toLowerCase();
  const target = weatherConfig.find((item) =>
    item.keywords.includes(normalizeDesc)
  );

  return target;
};

export const formatTemperature = (temp) => {
  const rounded = Math.round(temp);
  return temp > 0 ? `+${rounded}°` : `${rounded}°`;
};

export const getIconComponent = (description) => {
  const config = getWeatherUi(description);

  switch (config.icon) {
    case "sunny":
      return ClearDayIcon;
    case "cloudy":
      return CloudyIcon;
    case "rain":
      return CloudyWithRain;
    case "partly-cloudy":
      return CloudyDayIcon;
    default:
      return CloudyDayIcon;
  }
};
