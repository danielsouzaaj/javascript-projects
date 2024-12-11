const apiKey = '64facab92c96c129044203c9717e3b1c'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'

const searchInput = document.querySelector('.search input')
const searchForm = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function getWeather(city) {
    const response = await fetch(apiUrl + `q=${city}&appid=${apiKey}`)

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        return
    }

    const data = await response.json()

    document.querySelector('.error').style.display = 'none'

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + " m/s"

    weatherIcon.src = `./assets/images/${data.weather[0].main.toLowerCase()}.png`

    document.querySelector('.weather').style.display = 'block'

}

function handleClick(event) {
    event.preventDefault()
    getWeather(searchInput.value)
    searchInput.value = ''
}

searchForm.addEventListener('click', handleClick)

