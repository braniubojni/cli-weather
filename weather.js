#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import {
  printError,
  printHelp,
  printMessage,
  printWeather,
} from './services/log.service.js';
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICT,
} from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) return printError('Token was not provided');
  try {
    await saveKeyValue(TOKEN_DICT.token, token);
    printMessage('Token saved');
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    return printError('City was not provided');
  }
  try {
    // Checkin for city validation
    await getWeather(city);

    await saveKeyValue(TOKEN_DICT.city, city);
    printMessage('City saved');
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICT.city));
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError('City name is invalid');
    } else if (e?.response?.status == 401) {
      printError('Token is invalid');
    } else {
      printError(e.message);
    }
  }
};

const initClI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};

initClI();
