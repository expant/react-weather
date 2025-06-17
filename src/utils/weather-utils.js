const weatherConfig = [
  {
    keywords: ["пасмурно", "облачно", "тучи"],
    gradientClassName: "cloudy",
  },
  {
    keywords: [
      "облачно с прояснениями",
      "переменная облачность",
      "небольшая облачность",
    ],
    gradientClassName: "partly-cloudy",
  },
  {
    keywords: ["ясно", "солнечно", "чистое небо"],
    gradientClassName: "sunny",
  },
  {
    keywords: ["дождь", "ливень", "моросящий дождь", "небольшой дождь"],
    gradientClassName: "rain",
  },
];

export const getWeatherClass = (description) => {
  if (!description) return "";

  const normalizeDesc = description.toLowerCase();
  const target = weatherConfig.find((item) =>
    item.keywords.includes(normalizeDesc)
  );

  return target?.gradientClassName || "sunny";
};

export const formatTemperature = (temp) => {
  const rounded = Math.round(temp);
  return temp > 0 ? `+${rounded}°` : `${rounded}°`;
};
