var wxAPIKey = require('../secrets/wxAPIKey');

var rootURL = 'api.openweathermap.org/data/2.5/weather?'

var kelvinToF = function(tempK){
  var celsius = tempK-273.15;
  var tempF = 9/5*celsius + 32;
  return Math.round(tempF) + ' ˚F';
}

modules.export = function (latitude, longitude){
  var url = `${rootURL}APPID=${wxAPIKey}&lat=${latitude}&lon=${longitude}`;

  fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(json){
      return {
        city: json.name,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      }
    });


}
