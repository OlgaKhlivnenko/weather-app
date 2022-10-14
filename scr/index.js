// write your code here
let formSearch = document.querySelector(".formSearch");
let input = document.querySelector(".searchCity");
let city = document.querySelector(".city");
let data = document.querySelector(".data");
let celsium = document.querySelector(".unit-celsium");
let foring = document.querySelector(".unit-foring");
let temp = document.querySelector(".temp");
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

celsium.addEventListener("click", onChangeCelsium);
foring.addEventListener("click", onChangeUnit);
formSearch.addEventListener("submit", onSearch);
