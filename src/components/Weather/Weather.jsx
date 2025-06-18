import { getIconComponent } from "../../utils/weather-utils";
import "./Weather.css";

function Weather({ weather }) {
  const Icon = getIconComponent(weather?.description);

  return (
    <>
      <div className="weather">
        {!weather ? (
          "Прогнозов нет"
        ) : (
          <>
            <h2 className="weather__city-name">{weather.cityName}</h2>
            <div className="weather__info">
              <div className="weather__temp">
                <div>{weather.temp}</div>
                <div className="weather__feels-like">
                  Ощущается как {weather.feelsLike}
                </div>
              </div>
              <Icon className="weather__icon" />
            </div>
            <div className="weather__description">{weather.description}</div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
