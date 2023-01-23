import pubsub from './pubsub';

const searchBar = document.querySelector('.search-bar');
const form = document.querySelector('.search-container');

function getURL(value) {
  const noLeadingOrTrailingWhiteSpace = value.replace(/^\s+|\s+$/g, '');
  const city = noLeadingOrTrailingWhiteSpace.replace(/\s/g, '%20');
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=643ee83fd07e5e22fcd7e40a78fd4672`;
}

function Weather(name, timezone, temp, hi, low, feels, main, wind, pressure) {
  return {
    name,
    timezone,
    temp,
    hi,
    low,
    feels,
    main,
    wind,
    pressure,
  };
}

function sortData(obj) {
  return Weather(
    obj.name,
    obj.timezone,
    obj.main.temp,
    obj.main.temp_max,
    obj.main.temp_min,
    obj.main.feels_like,
    obj.weather[0].main,
    obj.wind,
    obj.main.pressure,
  );
}

async function getData(url) {
  const response = await fetch(url, {
    mode: 'cors',
  });
  const data = await response.json();
  // console.log(data); DELETE ME...............................
  const sorted = sortData(data);
  pubsub.publish('Data', sorted);
}

function searchByEnter(e) {
  if (document.activeElement === searchBar && e.key !== 'Enter') return;
  e.preventDefault();
  const validity = form.reportValidity();
  if (validity) {
    const url = getURL(searchBar.value);
    getData(url);
  }
}

window.addEventListener('keydown', searchByEnter);
