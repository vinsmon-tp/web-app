const request = require('request')
const util = require('util')

const get_coordinates = (location_name=" ", callback) => {
    
    const map_http_query = "https://api.mapbox.com/geocoding/v5/mapbox.places/%s.json?access_token=%s&limit=1"
    const map_stack_access_key = "pk.eyJ1IjoidHB2aW5zIiwiYSI6ImNrYWtxdGlnMzBxdG8yeG1ub3NsM2N3bGkifQ.9k-iDRyJX5ENFCqyAZvqKA"
    
    const url = util.format(map_http_query,  
        encodeURIComponent(location_name), 
        map_stack_access_key)

    request({url, json:true}, (error, {body}={}) => {
        if(error){
            callback('Unable to connect to location service! \n', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location ', undefined)
        }else{
            callback(undefined, {latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name})
        }
    })
}

module.exports = {get_coordinates}