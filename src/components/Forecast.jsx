import React from "react";
import "../assets/css/styles.css";
import Arrow_Up_Icon from "../assets/images/arrow-up.png";
import Arrow_Down_Icon from "../assets/images/arrow-down.png";
import Humidity_Icon from "../assets/images/humidity.png";
import Wind_Icon from "../assets/images/wind_icon.png";
import Clear from "../assets/images/clear.png";
import Wind from "../assets/images/wind.png";
import Cloudy from "../assets/images/cloudy.png";
import Lightning from "../assets/images/lightning.png";
import Haze from "../assets/images/haze.png";
import Rain from "../assets/images/rain.png";
import Snow from "../assets/images/snow.png";

function Forecast({ forecastData }) {
  const icons = [Clear, Wind, Cloudy, Lightning, Haze, Rain, Snow];
  console.log(forecastData);

  // Icon change function
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

  return (
    <>
      <div className="foreCast mainContainer">
        <div className="header">
          <p>Forecast</p>
        </div>

        {forecastData === undefined ? (
          <div>
            <p className="textHover">No Data Found!</p>
          </div>
        ) : (
          <>
            <div className="CardSlider">
              <div className="cardBody">
                <img
                  src={setIcons(forecastData.list[0].weather[0].description)}
                  alt={forecastData.list[0].weather[0].description}
                  className="cardImg icon"
                />
                <p className="description">
                  {forecastData.list[0].weather[0].description}
                </p>
                <div className="row">
                  <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                  <p>{`${forecastData.list[0].main.temp_max}°`}</p>
                  <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                  <p>{`${forecastData.list[0].main.temp_min}°`}</p>
                </div>
                <span className="row">
                  <img src={Humidity_Icon} alt="" />
                  <p>{`${forecastData.list[0].main.humidity}%`}</p>
                </span>
                <span className="row">
                  <img src={Wind_Icon} alt="" />
                  <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
                </span>
              </div>

              <div className="cardBody">
                <img src={Clear} alt="" className="cardImg icon" />
                <p className="description">
                  {forecastData.list[0].weather[0].description}
                </p>
                <div className="row">
                  <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                  <p>{`${forecastData.list[0].main.temp_max}°`}</p>
                  <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                  <p>{`${forecastData.list[0].main.temp_min}°`}</p>
                </div>
                <span className="row">
                  <img src={Humidity_Icon} alt="" />
                  <p>{`${forecastData.list[0].main.humidity}%`}</p>
                </span>
                <span className="row">
                  <img src={Wind_Icon} alt="" />
                  <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
                </span>
              </div>

              <div className="cardBody">
                <img src={Clear} alt="" className="cardImg icon" />
                <p className="description">
                  {forecastData.list[0].weather[0].description}
                </p>
                <div className="row">
                  <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                  <p>{`${forecastData.list[0].main.temp_max}°`}</p>
                  <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                  <p>{`${forecastData.list[0].main.temp_min}°`}</p>
                </div>
                <span className="row">
                  <img src={Humidity_Icon} alt="" />
                  <p>{`${forecastData.list[0].main.humidity}%`}</p>
                </span>
                <span className="row">
                  <img src={Wind_Icon} alt="" />
                  <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
                </span>
              </div>

              <div className="cardBody">
                <img src={Clear} alt="" className="cardImg icon" />
                <p className="description">
                  {forecastData.list[0].weather[0].description}
                </p>
                <div className="row">
                  <img src={Arrow_Up_Icon} alt="Arrow Up Icon" />
                  <p>{`${forecastData.list[0].main.temp_max}°`}</p>
                  <img src={Arrow_Down_Icon} alt="Arrow Down Icon" />
                  <p>{`${forecastData.list[0].main.temp_min}°`}</p>
                </div>
                <span className="row">
                  <img src={Humidity_Icon} alt="" />
                  <p>{`${forecastData.list[0].main.humidity}%`}</p>
                </span>
                <span className="row">
                  <img src={Wind_Icon} alt="" />
                  <p>{`${forecastData.list[0].wind.speed}km/h`}</p>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Forecast;
