import React, { useState, useEffect } from "react";
import "../assets/css/styles.css";
import LoadingBar from "react-top-loading-bar";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Arrow_Up_Icon from "../assets/images/arrow-up.png";
import Arrow_Down_Icon from "../assets/images/arrow-down.png";
import Humidity_Icon from "../assets/images/humidity.png";
import Wind_Icon from "../assets/images/wind.png";
import Pressure_Icon from "../assets/images/pressure.png";
import Clear from "../assets/images/clear.png";
import Wind from "../assets/images/wind.png";
import Cloudy from "../assets/images/cloudy.png";
import Cldd_Icon from "../assets/images/cldd.png.jpeg";
import Lightning from "../assets/images/lightning.png";
import Haze from "../assets/images/haze.png";
import Rain from "../assets/images/rain.png";
import Snow from "../assets/images/snow.png";
import Search_icon from "../assets/images/search-icon.png";

function Weather() {
  const [inpValue, setInpValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const icons = [Clear, Wind, Cloudy, Lightning, Haze, Rain, Snow];
  const api = {
    key: "6b4d63af593e3914a31ab5a917b1c31b",
    main_url: "https://api.openweathermap.org/data/2.5/weather?",
  };

  const setIcons = (weatherData) => {
    switch (weatherData) {
      case "clear sky":
        return icons[0];

      case "few clouds":
        return icons[2];

      case "scattered clouds":
        return icons[2];

      case "drizzle":
        return icons[2];

      case "overcast clouds":
        return icons[2];

      case "broken clouds":
        return icons[2];

      case "shower rain":
        return icons[5];

      case "light rain":
        return icons[5];

      case "moderate rain":
        return icons[5];

      case "rain":
        return icons[5];

      case "thunderstorm thunderstorm with light rain":
        return icons[3];

      case "thunderstorm with light rain":
        return icons[3];

      case "snow":
        return icons[6];
        
       case "broken clouds":
          return Cldd_Icon;

      case "light snow":
        return icons[6];

      case "haze":
        return icons[4];

      case "smoke":
        return icons[4];

      default:
        return icons[0];
    }
  };
  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      let response = await fetch(
        `${api.main_url}q=${city}&units=metric&appid=${api.key}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data for ${city}`);
      }
      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData("Nairobi");
  }, []);

  const handleSearch = async () => {
    if (inpValue.trim() !== "") {
      fetchWeatherData(inpValue);
    } else {
      setError("Please enter a city name!");
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    } else {
      setError("");
    }
  };

  return (
    <>
      <LoadingBar color="#6F74A4" progress={loading ? 50 : 100} height={3} />
      <div className="mainWrapper">
        <div className="searchContainer">
          <input
            type="text"
            className="searchInp"
            placeholder="search your location..."
            onKeyDown={handleKey}
            onChange={(e) => setInpValue(e.target.value)}
            autoFocus
          />
          <span className="searchIconBox">
            <img src={Search_icon} alt="Search Icon" onClick={handleSearch} />
          </span>
        </div>

        <div className="mainContainer">
          <div className="header">
            <p>Current Weather</p>
            {/* <button>Change Units</button> */}
          </div>

          <div className="currentWeather">
            {weatherData === null ? (
              <div>
                <p className="textHover">No Data Found!</p>
              </div>
            ) : (
              <>
                <div className="basicInfo">
                  <p className="location">{`${weatherData.name}, ${weatherData.sys.country}`}</p>
                  <div className="iconBox">
                    <img
                      className="icon"
                      width={"100px"}
                      src={setIcons(weatherData.weather[0].description)}
                      alt="Weather Icon"
                    />
                    <p className="temp">{`${Math.floor(
                      weatherData.main.temp
                    )}°`}</p>
                  </div>
                  <p className="description">{`${weatherData.weather[0].description}`}</p>
                </div>

                <div className="extraInfo">
                  <p className="feelsLike">{`Feels like ${Math.floor(
                    weatherData.main.feels_like
                  )}°`}</p>
                  <div className="tempContainer">
                    <div className="tempBox">
                      <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                      <p className="max_temp">{`${weatherData.main.temp_max}°`}</p>
                    </div>
                    <div className="tempBox">
                      <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                      <p className="min_temp">{`${weatherData.main.temp_min}°`}</p>
                    </div>
                  </div>

                  <span className="row">
                    <img src={Humidity_Icon} alt="Humidity Icon" />
                    <p className="humidity">Humidity</p>
                    <p>{`${weatherData.main.humidity}%`}</p>
                  </span>
                  <span className="row">
                    <img src={Wind_Icon} alt="Wind Icon" />
                    <p className="wind"> Wind</p>
                    <p>{`${weatherData.wind.speed}km/h`}</p>
                  </span>
                  <span className="row">
                    <img src={Pressure_Icon} alt="Pressure Icon" />
                    <p className="pressure">Pressure</p>
                    <p>{`${weatherData.main.pressure}%`}</p>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {error && (
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false}
          draggable={false}
        >
          {toast.error(error, { transition: Slide })}
        </ToastContainer>
      )}
    </>
  );
}

export default Weather;
