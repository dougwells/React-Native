var wxAPIKey = require('../secrets/wxAPIKey');

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather';

var kelvinToF = function(tempK){
  var celsius = tempK-273.15;
  var tempF = 9/5*celsius + 32;
  return Math.round(tempF) + ' ˚F';
}

module.exports = function (latitude, longitude){
  var url = `${rootUrl}?APPID=${wxAPIKey}&lat=${latitude}&lon=${longitude}`;
  console.log(url);
  // fetch(url).then(function(response){console.log(response);});

  return fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        return {
          city: json.name,
          temperature: kelvinToF(json.main.temp),
          description: json.weather[0].description
        }
      });


}
