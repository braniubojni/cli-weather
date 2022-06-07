#!/usr/bin/env node

import { getArgs } from './helpers/args.js';

const initClI = () => {
  const args = getArgs(process.argv);
  if (args.f){
      // Help advice
  }
  if (args.s){
    // Save country
  }
  if (args.t){
    // Save token
  }
  // Show weather
};

initClI();
