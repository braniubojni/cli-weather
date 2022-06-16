import chalk from 'chalk';

const printError = (err) => {
  console.log(`${chalk.bgRed('ERROR')} ${err}`);
};

const printMessage = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
};

const printHelp = () => {
  console.log(
    `
  ${chalk.bgCyan('HELP')} 
  Without param - output weather
  -s [CITY] to set the city
  -h for help
  -t [API_KEY] to save the token
    `
  );
};

export { printError, printMessage, printHelp };
