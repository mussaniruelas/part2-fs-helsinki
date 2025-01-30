import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;
const base_url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=current&appid=${api_key}`;

const getWeather = async (lat, lon) => {
  const date = axios
    .get(base_url.replace("{lat}", lat).replace("{lon}", lon))
    .then((response) => response.data);
  const wather = date.then((date) => ({
    temp: date.current.temp,
    wind: date.current.wind_speed,
    icon: date.current.weather[0].icon,
  }));
  return wather;
};

export { getWeather };
