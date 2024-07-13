const convertToCelsius = function(tempInF) {
  let celcius = (tempInF-32) / (9/5);
  return Math.round(celcius * 10) / 10
};

const convertToFahrenheit = function(tempInC) {
  let fahrenheit = (tempInC * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
