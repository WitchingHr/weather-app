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

// Sets temperature unit from toggle switch
let f = true;
pubsub.subscribe('Unit', (unit) => {
  if (unit === 'C') {
    f = false;
  } else {
    f = true;
  }
});

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
  const low = document.querySelector('.low');
  const temp = document.querySelector('.temp');
  const feels = document.querySelector('.feels-temp');
  if (f) {
    high.innerHTML = `${convertTempF(data.hi)}°`;
    low.innerHTML = `${convertTempF(data.low)}°`;
    temp.innerHTML = `${convertTempF(data.temp)}`;
    feels.innerHTML = `${convertTempF(data.feels)}°`;
  } else {
    high.innerHTML = `${convertTempC(data.hi)}°`;
    low.innerHTML = `${convertTempC(data.low)}°`;
    temp.innerHTML = `${convertTempC(data.temp)}`;
    feels.innerHTML = `${convertTempC(data.feels)}°`;
  }
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

function convertWind(data) {
  return data * 1.944;
}

function populateWind(data) {
  const direction = document.querySelector('.wind-direction');
  const speed = document.querySelector('.wind-speed');
  const gauge = document.querySelector('.wind-gauge');
  direction.innerHTML = convertWindDeg(data.wind.deg);
  speed.innerHTML = Math.floor(convertWind(data.wind.speed));
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

function getTime(tz) {
  const d = new Date();
  let date = d.getUTCDate();
  let day = d.getUTCDay();
  let month = d.getUTCMonth();
  let hh = d.getUTCHours() + (tz / 3600);
  if (hh < 0) {
    hh += 24;
  }
  const year = d.getFullYear();
  const mm = d.getMinutes();
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const days = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
  ];
  if (hh > 24) {
    hh -= 24;
    date += 1;
    if (day === 6) {
      day = 0;
    } else {
      day += 1;
    }
    const leap = () => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    if (day === 30 && month === 1 && leap) {
      day = 1;
      month = 2;
    }
    if (day === 29 && month === 1 && !leap) {
      day = 1;
      month = 2;
    }
    const thirty = [4, 6, 9, 11];
    if (day === 31 && thirty.some((m) => m === month)) {
      day = 1;
      month += 1;
    }
    if (day === 32 && month !== 12) {
      day = 1;
      month += 1;
    }
    if (day === 32 && month === 12) {
      day = 1;
      month = 0;
    }
  }
  return [`${days[day]} ${months[month]} ${date}`, `${hh}:${mm}`];
}

function populateDatetime(data) {
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const dateArray = getTime(data.timezone);
  const [d, t] = dateArray;
  date.innerHTML = d;
  time.innerHTML = t;
}

function populateVisibility(data) {
  const meter = document.getElementById('visibility');
  meter.setAttribute('value', `${data.visibility}`);
  const popup = document.querySelector('.vis-pop');
  popup.innerHTML = `${data.visibility}m`;
}

function populateHumidity(data) {
  const meter = document.getElementById('humidity');
  meter.setAttribute('value', `${data.humidity}`);
  const popup = document.querySelector('.hum-pop');
  popup.innerHTML = `${data.humidity}%`;
}

function populatePressure(data) {
  const meter = document.getElementById('pressure');
  meter.setAttribute('value', `${data.pressure}`);
  const popup = document.querySelector('.pres-pop');
  popup.innerHTML = `${data.pressure}hPa`;
}

function populate(data) {
  console.log(data); // DELETE ME..........................
  populateCityInfo(data);
  populateDatetime(data);
  populateTemps(data);
  populateWeatherStatus(data);
  populateWind(data);
  populateVisibility(data);
  populateHumidity(data);
  populatePressure(data);
}

pubsub.subscribe('Data', (data) => {
  populate(data);
});
