import { useState } from "react";
import { fetchGeoCoordinates, fetchWeather } from "./api/weather";
import { getWeatherUi } from "./utils/weather-utils";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleWeatherSearch = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const { lat, lon } = await fetchGeoCoordinates(cityName);
      const weatherData = await fetchWeather(lat, lon);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const backgroundGradient =
    getWeatherUi(weather?.description)?.gradientClassName || "sunny";

  return (
    <div className={`bg-wrap ${backgroundGradient}`}>
      <div className="container">
        <Search handleWeatherSearch={handleWeatherSearch} loading={loading} />
        <Weather weather={weather} error={error} />
      </div>
    </div>
  );
}

export default App;
