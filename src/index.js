// write your code here
let formSearch = document.querySelector(".formSearch");
let inputEl = document.querySelector(".searchCity");
let city = document.querySelector(".city");
let dataEl = document.querySelector(".data");
let celsium = document.querySelector(".unit-celsium");
let foring = document.querySelector(".unit-foring");
let temp = document.querySelector(".temp");
let btnCurrent = document.querySelector(".btn-current");
let weatherDescripEl = document.querySelector(".weather-description");
let humidityEl = document.querySelector(".humidity");
let windEl = document.querySelector(".wind");

function onSearch(city){
  let apiKey = "7ea133b4bf9e4c6570aa5a98e67e1b6b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurCity);
}
function handelSubmit(e) {
  e.preventDefault();
  onSearch(inputEl.value);
  // city.innerHTML = input.value;
}
function onChangeUnit(e) {
  e.preventDefault();
  temp.innerHTML = Math.round((temp.innerHTML * 9) / 5 + 32);
}
function onChangeCelsium(e) {
  e.preventDefault();
  temp.innerHTML = 10;
}
function showTime(timestamp){
  let now = new Date();
  let days = ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
  let day = days[now.getDay()];
  let hours = now.getHours();
    if(hours < 10){
      hours = `0${hours}`
    }
  let minutes = now.getMinutes();
    if(minutes < 10){
      minutes = `0${minutes}`
    }
  return `${day} ${hours}:${minutes}`
}



function showCurCity(response){
  console.log(response);
  city.innerHTML = response.data.name;
  weatherDescripEl.innerHTML = response.data.weather[0].description;
  dataEl.innerHTML = showTime(response.data.dt * 1000);
  temp.innerHTML = Math.round(response.data.main.temp);
  humidityEl.innerHTML = response.data.main.humidity;
  windEl.innerHTML = response.data.wind.speed;

}




// navigator.geolocation.getCurrentPosition(currentPosition);
celsium.addEventListener("click", onChangeCelsium);
foring.addEventListener("click", onChangeUnit);
formSearch.addEventListener("submit", handelSubmit);
// btnCurrent.addEventListener("click", showCurTemerature);