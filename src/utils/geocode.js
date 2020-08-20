const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFnZW5kZXJvdWVuIiwiYSI6ImNrZHFkMW50czFtZm0zMXBlbDJ4d251ZTQifQ.kXV4XcXRnqxCDsQSv6zPhg&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Please try again.', undefined);
    } else {
      const [features] = body.features;
      const [longitude, latitude] = features.center;

      callback(undefined, { latitude, longitude, location: features.place_name });
    }

  });

};

module.exports = geocode;
