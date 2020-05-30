const yargs = require('yargs')
yargs.command({
    command : 'forecast',
    describe : 'Fetch weather forecast',
    builder : {
        location : {
            describe : 'Location for forecasting weather',
            demadOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        
        coordinates.get_coordinates(argv.location, (error, {latitude, longitude, location}={} )  => {
            if(error){
                console.log(error)
            }else{
                forecast.get_weather(latitude, longitude, (error, forecast_data) => {
                    if(error){
                        console.log(error)
                    }else{
                        console.log(location+"\n", forecast_data)
                    }
                })
            }
        })
    }
})

yargs.parse()