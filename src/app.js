const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require(path.join(__dirname, '../utils/weather-api-call'))
const coordinates = require(path.join(__dirname, '../utils/geo-coordinate-api-call'))

const app = express()

// Path configuration for express server
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.listen(3000, ()=>{
    console.log('Server is running...')
})

app.get('', (req, res)=>{

    res.render('index', {
        title : "Weather",
        name: 'Vinsmon TP',
        page_desc : "Here you can find weather forcast"
    })
})

app.get('/about', (req, res)=>{

    res.render('about', {
        title : "About me",
        name: 'Vinsmon TP',
        page_desc : "Here you can read about me"
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title : "Help",
        name : "Vinsmon TP",
        page_desc : "Here I am to help"
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title : "404",
        name : "Vinsmon TP",
        page_desc : "Help Article requested not found"
    })
})

app.get('/weather', (req, res)=>{

    if(!req.query.location){
        return res.send({
            error : "You must proivide a location to check forecast."
        })
    }

    coordinates.get_coordinates(req.query.location, (error, {latitude, longitude, location}={} )  => {
        if(error){
            return res.send({
                error
            })
        }else{
            forecast.get_weather(latitude, longitude, (error, forecast_data) => {
                if(error){
                    return res.send({
                        error
                    })
                }else{
                    res.send({
                        forecast: forecast_data,
                        location,
                        address: req.query.address
                    })
                }
            })
        }
    })
})

app.get('/about/*', (req, res)=>{
    res.render('404', {
        title : "404",
        name : "Vinsmon TP",
        page_desc : "Am sorry !! that's all about me"
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title : "404",
        name : "Vinsmon TP",
        page_desc : "Page requested not found"
    })
})