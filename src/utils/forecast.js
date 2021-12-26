const request = require('request')

const forecast = (latitude, longitude, callback) => {
    debugger;
    const url = 'http://api.weatherstack.com/current?access_key=7fb74b0e2535f9cb03af5bd304576aaf&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => { 
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body);
            callback(undefined, {
                currentTemprature: body.current.temperature,
                currentTempratureFeelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast