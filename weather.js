#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printMessage } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICT } from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) return printError('Token was not provided');
  try {
    await saveKeyValue(TOKEN_DICT.token, token);
    printMessage('Token saved');
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather);
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
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForecast();
};

initClI();
