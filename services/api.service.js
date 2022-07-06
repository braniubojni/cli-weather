import axios from 'axios';
import https from 'https';
import { getKeyValue, TOKEN_DICT } from './storage.service.js';

const langs = {
  am: 'am',
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
  console.log(data)
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

export { getWeather };
