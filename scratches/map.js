const request = require('request')
const util = require('util')
const chalk = require('chalk')

const red_txt = chalk.redBright
const green_txt = chalk.greenBright
const yellow_txt = chalk.yellowBright

const map_http_query = "http://api.weatherstack.com/current?access_key=%s&query=%s,%s&units=%s"
const map_stack_access_key = "pk.eyJ1IjoidHB2aW5zIiwiYSI6ImNrYWtxdGlnMzBxdG8yeG1ub3NsM2N3bGkifQ.9k-iDRyJX5ENFCqyAZvqKA"
const latitude = "40.714"
const longitude = "-74.006"
const units = "m"
const request_url = util.format(weather_http_query, weather_stack_access_key, latitude, longitude, units)
