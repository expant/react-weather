import "./Weather.css";
// import CloudyDayIcon from "../../assets/icons/weather/cloudy-day.svg?react";
// import CloudyIcon from "../../assets/icons/weather/cloudy.svg?react";
// import ClearDayIcon from "../../assets/icons/weather/clear-day.svg?react";
// import CloudyWithRain from "../../assets/icons/weather/cloudy-with-rain.svg?react";
// import CloudyDayIcon from "./assets/icons/cloudy-day.svg";

function Weather({ weather }) {
  return (
    <>
      <div className="weather">
        {!weather ? (
          "Прогнозов нет"
        ) : (
          <>
            <h2 className="weather__city-name">{weather.cityName}</h2>
            <div className="weather__temp">
              {weather.temp}
              <div className="weather__feels-like">
                Ощущается как {weather.feelsLike}
              </div>
            </div>
            <div className="weather__description">
              {weather.description}
              {/* {weatherIconsMap[weather.description]} */}
              {/* <img
                  className="weather__icon"
                  src={CloudyDayIcon}
                  alt="иконка погоды"
                /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
