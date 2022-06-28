#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printMessage } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
try {
  await saveKeyValue('token', token)
  printMessage('Token saved')
} catch (error) {
  printError(error.message)  
}}

const initClI = () => {
  const args = getArgs(process.argv);
  if (args.h){
    printHelp();
  }
  if (args.s){

  }
  if (args.t){
    return saveToken(args.t)
  }
  // Show weather
};

initClI();
