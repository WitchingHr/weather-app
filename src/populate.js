import pubsub from './pubsub';
import Cloudy from './styles/assets/svg/cloudy.svg';
import Drizzle from './styles/assets/svg/drizzle.svg';
import Foggy from './styles/assets/svg/foggy.svg';
import Partly from './styles/assets/svg/partly-sunny.svg';
import Rain from './styles/assets/svg/rain.svg';
import Snow from './styles/assets/svg/snow.svg';
import Sunny from './styles/assets/svg/sunny.svg';
import Thunderstorm from './styles/assets/svg/thunderstorm.svg';

function populateCityInfo(data) {
  const cityName = document.querySelector('.city-name');
  cityName.innerHTML = data.name;
}

function convertTempF(temp) {
  const num = 1.8 * (temp - 273) + 32;
  return Math[num < 0 ? 'ceil' : 'floor'](num); // truncate decimals
}

function convertTempC(temp) {
  const num = temp - 273.15;
  return Math[num < 0 ? 'ceil' : 'floor'](num); // truncate decimals
}

function populateTemps(data) {
  const high = document.querySelector('.high');
  high.innerHTML = `${convertTempF(data.hi)}°`;
  const low = document.querySelector('.low');
  low.innerHTML = `${convertTempF(data.low)}°`;
  const temp = document.querySelector('.temp');
  temp.innerHTML = `${convertTempF(data.temp)}`;
  const feels = document.querySelector('.feels-temp');
  feels.innerHTML = `${convertTempF(data.feels)}`;
}

function convertWindDeg(deg) {
  let cardinal;
  switch (true) {
    case (deg > 0 && deg <= 22.5):
    case (deg > 337.5):
      cardinal = 'N';
      break;
    case (deg > 22.5 && deg <= 67.5):
      cardinal = 'NE';
      break;
    case (deg > 67.5 && deg <= 112.5):
      cardinal = 'E';
      break;
    case (deg > 112.5 && deg <= 157.5):
      cardinal = 'SE';
      break;
    case (deg > 157.5 && deg <= 202.5):
      cardinal = 'S';
      break;
    case (deg > 202.5 && deg <= 247.5):
      cardinal = 'SW';
      break;
    case (deg > 247.5 && deg <= 292.5):
      cardinal = 'W';
      break;
    case (deg > 292.5 && deg <= 337.5):
      cardinal = 'NW';
      break;
    default:
      cardinal = 'N';
  }
  return cardinal;
}

function populateWind(data) {
  const direction = document.querySelector('.wind-direction');
  const speed = document.querySelector('.wind-speed');
  const gauge = document.querySelector('.wind-gauge');
  direction.innerHTML = convertWindDeg(data.wind.deg);
  speed.innerHTML = Math.floor(data.wind.speed);
  gauge.style.transform = `rotate(${Math.floor(data.wind.deg)}deg)`;
}

let url;
let weatherName;
function getIcon(code) {
  switch (code) {
    case 'Thunderstorm':
      url = Thunderstorm;
      weatherName = 'Thunderstorming';
      break;
    case 'Drizzle':
      url = Drizzle;
      weatherName = 'Drizzling';
      break;
    case 'Rain':
      url = Rain;
      weatherName = 'Raining';
      break;
    case 'Snow':
      url = Snow;
      weatherName = 'Snowing';
      break;
    case 'Clear':
      url = Sunny;
      weatherName = 'Clear';
      break;
    case 'Clouds':
      url = Cloudy;
      weatherName = 'Cloudy';
      break;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      url = Foggy;
      weatherName = 'Hazy';
      break;
    default:
      url = Sunny;
      weatherName = 'Sunny';
  }
}

function populateWeatherStatus(data) {
  const icon = document.querySelector('.icon');
  const weatherStatus = document.querySelector('.weather-status');
  getIcon(data.main);
  icon.style.backgroundImage = `url(${url.replace(/[']+g/, '')})`;
  weatherStatus.innerHTML = weatherName;
}

function populate(data) {
  console.log(data); // DELETE ME..........................
  populateCityInfo(data);
  populateTemps(data);
  populateWeatherStatus(data);
  populateWind(data);
}

pubsub.subscribe('Data', (data) => {
  populate(data);
});
