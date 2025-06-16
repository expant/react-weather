import { useState } from "react";
import { fetchGeoCoordinates, fetchWeather } from "./api/weather";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const cityName = formData.get("city").trim();

    if (!cityName) {
      console.log("Пустая строка");
      return;
    }

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
    <>
      <form className="form" onSubmit={onSubmit}>
        <label className="form__city-label">
          <span>Город:</span>
          <input type="text" name="city" className="form__city" />
        </label>
        <button type="submit" className="form__btn" disabled={loading}>
          {loading ? "Загрузка.." : "Узнать погоду"}
        </button>
      </form>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="weather">
          {!weather ? (
            "Прогнозов нет"
          ) : (
            <>
              <h2 className="weather__city-name">{weather.cityName}</h2>
              <div className="weather__temp">{weather.temp}</div>
              <div className="weather__feels-like">
                Ощущается как {weather.feelsLike}
              </div>
              <div className="weather__description">{weather.description}</div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
