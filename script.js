const url ='https://api.openweathermap.org/data/2.5/';
const key = '0d84511b92e0a7f1f6b1beb729ebb440'

const setQuery = (e) =>{
    if(e.key == 'Enter'){
        getWeatherData(searchBar.value);
    }
}

const getWeatherData = (city) =>{
    let query = `${url}/weather?q=${city}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (data) =>{
    const city = document.querySelector('.city')
    city.textContent = `${data.name}  ${data.sys.country}`
    const temp = document.querySelector('.temp')
    temp.innerHTML = `${Math.round(data.main.temp)}<small>°C</small>`;
    const desc = document.querySelector('.desc')
    desc.textContent = `${data.weather[0].description}`
    const minmax = document.querySelector('.minmax')
    minmax.innerHTML = `${Math.round(data.main.temp_min)}<small>°C</small> / ${Math.round(data.main.temp_max)}<small>°C</small>`

    
}
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', setQuery)