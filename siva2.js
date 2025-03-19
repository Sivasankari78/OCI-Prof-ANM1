const apiKey = 'YOUR_API_KEY'; // Replace with your actual OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
  const city = document.getElementById('city-input').value;
  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  // Construct the API URL
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch the weather data from the OpenWeatherMap API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found');
      } else {
        // Display the weather data on the dashboard
        document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data');
    });
}
