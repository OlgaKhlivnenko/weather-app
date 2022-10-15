// write your code here
let formSearch = document.querySelector(".formSearch");
let input = document.querySelector(".searchCity");
let city = document.querySelector(".city");
let data = document.querySelector(".data");
let celsium = document.querySelector(".unit-celsium");
let foring = document.querySelector(".unit-foring");
let temp = document.querySelector(".temp");
let btnCurrent = document.querySelector(".btn-current");
let weatherDescripEl = document.querySelector(".weather-description");
let humidityEl = document.querySelector(".humidity");
let windEl = document.querySelector(".wind");

function onSearch(e) {
  e.preventDefault();
  console.log(input.value);
  city.innerHTML = input.value;
}
function onChangeUnit(e) {
  e.preventDefault();
  temp.innerHTML = Math.round((temp.innerHTML * 9) / 5 + 32);
}
function onChangeCelsium(e) {
  e.preventDefault();
  temp.innerHTML = 10;
}

let now = new Date();
let day = now.toDateString();
let hour = now.toLocaleTimeString();
data.innerHTML = `${day} ${hour}`;

function showCurCity(response){
  console.log(response);
  city.innerHTML = response.data.name;
  weatherDescripEl.innerHTML = response.data.weather[0].description;
  console.log(weatherDescripEl);
  temp.innerHTML = Math.round(response.data.main.temp);
  humidityEl.innerHTML = response.data.main.humidity;
  windEl.innerHTML = response.data.wind.speed;

}

function currentPosition(position){
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiKey = "7ea133b4bf9e4c6570aa5a98e67e1b6b";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

axios.get(url).then(showCurCity);
}


navigator.geolocation.getCurrentPosition(currentPosition);
celsium.addEventListener("click", onChangeCelsium);
foring.addEventListener("click", onChangeUnit);
formSearch.addEventListener("submit", onSearch);
// btnCurrent.addEventListener("click", showCurTemerature);