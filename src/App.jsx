import { useState } from "react";
import { fetchGeoCoordinates, fetchWeather } from "./api/weather";
import { getWeatherClass } from "./utils/weather-utils";
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

  return (
    <div
      className={`bg-wrap ${getWeatherClass(weather?.description) || "sunny"}`}
    >
      <div className="container">
        <Search handleWeatherSearch={handleWeatherSearch} loading={loading} />
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <Weather weather={weather} />
        )}
      </div>
    </div>
  );
}

export default App;
