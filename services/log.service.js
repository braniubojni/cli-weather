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

const printWeather = (res, icon) => {
  console.log(
    `
  ${chalk.bgYellow('WEATHER')} Weather in city ${res.name} 
  ${icon}  ${res.weather[0].description}
  Temperature: ${res.main.temp} (feel like ${res.main.feels_like})
  Humidity:    ${res.main.humidity}%
  Wind speed:  ${res.wind.speed}
    `
  );
};

export { printError, printMessage, printHelp, printWeather };
