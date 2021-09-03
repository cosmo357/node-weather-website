const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2FtcmFuMzU3IiwiYSI6ImNrc280NTB4MzJhbTYydm5zNWtzbDN6YWYifQ.hQunzu9_EIrmbHPrF0mZSw&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
           callback('UNable to connect to location services!!', undefined) 
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode

