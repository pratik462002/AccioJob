const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const icon = document.querySelector(".icon");
const city = document.querySelector(".city");

const input = document.querySelector(".input");
const submit = document.querySelector(".submit");

const currentStatus = document.querySelector(".status");

submit.addEventListener("click", function () {
  if (input.value !== "") {
    console.log(input.value);
    requestApi(input.value);
  } else {
    window.alert("Add your City Currenctly..");
    input.value = "";
  }
});

function requestApi(city) {
  let apiKey = "c2ee8017d562bb6b49e77d514f8e251c";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  currentStatus.innerHTML = "Getting weather deatils....";
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherData(result));
}

function weatherData(info) {
  if (info.cod == "404") {
    window.alert("Add your City Currenctly..");
    currentStatus.innerHTML = `${input.value} invalid city .... `;
    input.value = "";
  } else {
    const city2 = info.name;
    const country2 = info.sys.country;

    const icon2 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

    const temp2 = info.main.temp;
    const { description, id } = info.weather[0];

    const { feels_like } = info.main;

    city.innerHTML = `${city2}/ ${country2}`;

    temp.innerHTML = `${Math.floor(temp2)}°C`;

    feelsLike.innerHTML = `${description}`;
  }

  console.log(info);
}
