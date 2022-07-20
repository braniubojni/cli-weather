import axios from 'axios';
import { getKeyValue, TOKEN_DICT } from './storage.service.js';

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️';
    case '02':
      return '⛅';
    case '03':
      return '🌥️';
    case '04':
      return '☁️';
    case '09':
      return '🌧️';
    case '10':
      return '🌦️';
    case '11':
      return '⛈️';
    case '13':
      return '❄️';
    case '50':
      return '🌫️';
  }
};

const getWeather = async (city) => {
  const token = process.env.TOKEN || (await getKeyValue(TOKEN_DICT.token));
  if (!token) {
    throw new Error(
      'The API key was not specified, set it with command -t [API_KEY]'
    );
  }
  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appId: token,
        lang: 'en',
        units: 'metric',
      },
    }
  );
  return data;
};
// Without axios code will look like this
// const url = new URL('https://api.openweathermap.org/data/2.5/weather');
// url.searchParams.append('q', city);
// url.searchParams.append('appid', token);
// url.searchParams.append('lang', langs.am);
// url.searchParams.append('lang', 'metric');
// https.get(url, (resp) => {
//   let res = '';
//   resp.on('data', (chunk) => (res += chunk));
//   resp.on('end', () => console.log(res));
//   resp.on('error', (err) => console.log('Error => ', err.message));
// });

export { getWeather, getIcon };
