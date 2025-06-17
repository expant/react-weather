import { useState } from "react";
import "./Search.css";
import SearchIcon from "../../assets/icons/search-icon.svg?react";

function Search({ handleWeatherSearch, loading }) {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cityName = formData.get("city").trim();

    if (!cityName) {
      console.log("Пустая строка");
      return;
    }
    handleWeatherSearch(cityName);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__city-label">
          {/* <span className="form__city-title">Город:</span> */}
          <SearchIcon className="form__city-icon" />
          <input
            type="text"
            name="city"
            className="form__city-input"
            placeholder="Город"
          />
        </label>
        <button type="submit" className="form__btn" disabled={loading}>
          {loading ? "Загрузка..." : "Узнать"}
        </button>
      </form>
    </>
  );
}

export default Search;
