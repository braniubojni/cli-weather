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
  getWeather('yerevan')
  // Show weather
};

initClI();
