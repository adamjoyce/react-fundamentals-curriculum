var axios = require('axios');

// Weather API key for higher rate limit.
var baseURL = 'http://api.openweathermap.org/data/2.5/';
var apiKey = 'bc602b1841b68146b66a87b0df087944';

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData).map(function(key) {
    return key + '=' + encodeURIComponent(queryStringData[key]);
  }).join('&');
}

function prepURL(type, queryStringData) {
  return baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: apiKey,
    cnt: 5
  };
}

function getCurrentWeather(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepURL('weather', queryStringData);
  return axios.get(url).then(function(currentWeatherData) {
    return currentWeatherData.data;
  });
}

function getForecast(city) {
  var queryStringData = getQueryStringData(city);
  var url = prepURL('forecast', queryStringData);
  return axios.get(url).then(function(forecastData) {
    return forecastData.data;
  });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}
