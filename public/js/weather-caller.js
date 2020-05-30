const checkWeatherButton = document.querySelector('form')
const locationForm = document.querySelector('input')
const errorMsgField = document.querySelector('#message-1')
const WeatherDataField = document.querySelector('#message-2')

checkWeatherButton.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = locationForm.value
    
    WeatherDataField
    WeatherDataField.innerText  = "Loading....."
    errorMsgField.innerText  = ""

    fetch('/weather?location='+location).then( (response) => {
        response.json().then((data) => {
            if(data.error){
                errorMsgField.textContent = data.error
                WeatherDataField.innerText  = ""
            }else{
                errorMsgField.textContent = data.location
                WeatherDataField.textContent = data.forecast
            }
        })
    })
    
})