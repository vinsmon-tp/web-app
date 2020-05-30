const request = require('request')
const util = require('util')

const get_weather = (latitude=" ", longitude=" ",callback) =>{
    
    const weather_http_query = "http://api.weatherstack.com/current?access_key=%s&query=%s,%s&units=%s"
    const weather_stack_access_key = "2beafad175dedd51af0bf2e80dbc9c64"
    const units = "m"
    
    const url = util.format(weather_http_query, 
        weather_stack_access_key, 
        encodeURIComponent(latitude), 
        encodeURIComponent(longitude), 
        units)

    request({url, json:true}, (error, {body}={}) => {
        
        if(error){
            callback('Unable to connect to weather service! \n'+error, undefined)
        }else if(body.error){
            callback('Unable to find weather \n', undefined)
        }else{
            const weather_result = "%s. Temperature is %sC but feel like %sC"
            callback(undefined,util.format(weather_result, 
                                                        body.current.weather_descriptions[0],
                                                        body.current.temperature, body.current.feelslike))
        }
    })
}

module.exports = {get_weather}