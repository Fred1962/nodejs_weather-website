const request = require ('request');

// http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=New York
// http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=Amsterdam
// http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=37.8267,-122.4233


// const url = 'http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=37.8267,-122.4233';
// //const url = 'http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=&units=1';

// request({url: url, json: true}, (error, response) => {
//     //console.log(response);
//     //const data = response.body;
//     //console.log(data.current);
//     if (error) {
//         console.log("Unable to connect to weather service");
//     } else if (response.body.error) {
//         console.log("Unable to find location");
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " out. It feels like " + response.body.current.feelslike + " degrees out.")
//     }

// })


// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=' + latitude + ',' + longitude + '&units=m';
//     //console.log(url)
    
//     request({url: url, json: true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather services');
//         }
//         else if (response.body.error) {
//             callback('Unable to find location');
//          }
//          else {
//              callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " out. It feels like " + response.body.current.feelslike + " degrees out.")
//          }
//     })
// }

// or destuctured ...

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=22714e2efdae02a244dce99a55e92106&query=' + latitude + ',' + longitude + '&units=m';
    //console.log(url)
    
    request({url, json: true}, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to weather services');
        }
        else if (body.error) {
            callback('Unable to find location');
         }
         else {
             callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " out. It feels like " + body.current.feelslike + " degrees out.")
         }
    })
}


module.exports = forecast;