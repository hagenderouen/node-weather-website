const request = require('request');

const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=96cf2701c39969db55d9f3db8f8589d7&query=' + lat + ',' + long + '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Please try again.', undefined);
    } else {
        const { weather_descriptions, temperature } = body.current;
        callback(undefined, `${weather_descriptions}. It feels like ${temperature} degrees out.`);
    }

  });

};

module.exports = forecast;
