const request = require('request')
const util = require('util')
const chalk = require('chalk')

const red_txt = chalk.redBright
const green_txt = chalk.greenBright
const yellow_txt = chalk.yellowBright

const weather_http_query = "http://api.weatherstack.com/current?access_key=%s&query=%s,%s&units=%s"
const weather_stack_access_key = "2beafad175dedd51af0bf2e80dbc9c64"
const latitude = "40.714"
const longitude = "-74.006"
const units = "m"
const request_url = util.format(weather_http_query, weather_stack_access_key, latitude, longitude, units)

request({url : request_url, json:true}, (error, response) => {
    
    if(error){
        console.log(red_txt('Can\'t connect to weather API'))
    }else if(response.body.error){
        console.log(yellow_txt('Unable to find location. Try another search'))
    }else{
        const weather_result = "%s. Temperature is %sC but feel like %sC"
        console.log(green_txt(util.format(weather_result, response.body.current.weather_descriptions[0],
            response.body.current.temperature, response.body.current.feelslike)))
    }
})