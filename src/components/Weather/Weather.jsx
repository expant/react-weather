import { getIconComponent } from "../../utils/weather-utils";
import "./Weather.css";

function Weather({ weather, error }) {
  const Icon = getIconComponent(weather?.description);

  if (error)
    return <div className="weather__error">Данное место не найдено</div>;

  return (
    <>
      <div className="weather">
        {!weather ? (
          <div className="weather__empty">Прогнозов нет</div>
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
