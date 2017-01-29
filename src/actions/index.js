import axios from 'axios';
import API_KEY from '../config.js';

const WEATHER_API_KEY = API_KEY.OPENWEATHERMAP_API_KEY;
const ROOTURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'us') {
  const url = `${ROOTURL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
