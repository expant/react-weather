const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchGeoCoordinates = async (cityName) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.length === 0) throw new Error("Данное место не найдено!");

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

export const fetchWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;
  const response = await fetch(url);
  const data = await response.json();

  let temp = Math.round(data.main.temp);
  let feelsLike = Math.round(data.main.feels_like);

  if (temp > 0) {
    temp = `+${temp}°`;
    feelsLike = `+${feelsLike}°`;
  } else {
    temp = `${temp}°`;
    feelsLike = `${feelsLike}°`;
  }

  return {
    temp,
    feelsLike,
    cityName: data.name,
    description: data.weather[0].description,
  };
};
