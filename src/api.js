import pubsub from './pubsub';

const searchBar = document.querySelector('.search-bar');
const form = document.querySelector('.search-container');

function getURL(value) {
  const noLeadingOrTrailingWhiteSpace = value.replace(/^\s+|\s+$/g, '');
  const city = noLeadingOrTrailingWhiteSpace.replace(/\s/g, '%20');
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=643ee83fd07e5e22fcd7e40a78fd4672`;
}

function Weather(name, timezone, temp, hi, low, feels, main, wind, pressure, humidity, visibility) {
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
    humidity,
    visibility,
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
    obj.main.humidity,
    obj.visibility,
  );
}

async function getData(url) {
  try {
    const response = await fetch(url, {
      mode: 'cors',
    });
    if (!response.ok) {
      throw new Error('Oops, city not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const homepage = document.querySelector('.homepage');
const loading = document.querySelector('.loading');
const main = document.querySelector('.main');
const errorpage = document.querySelector('.error');

// Alternates to loading screen while fetching
async function search(url) {
  if (!homepage.classList.contains('hidden')) {
    // homepage only visible on init load
    homepage.classList.toggle('hidden');
  }
  if (!main.classList.contains('hidden')) {
    // hides main if already looking at weather
    main.classList.toggle('hidden');
  }
  if (!errorpage.classList.contains('hidden')) {
    // hides errorpage if already looking at weather
    errorpage.classList.toggle('hidden');
  }
  loading.classList.toggle('hidden');
  try {
    const dataObj = await getData(url);
    pubsub.publish('Data', sortData(dataObj));
    loading.classList.toggle('hidden');
    main.classList.toggle('hidden');
  } catch {
    loading.classList.toggle('hidden');
    errorpage.classList.toggle('hidden');
  }
}

function searchByEnter(e) {
  if (document.activeElement === searchBar && e.key === 'Enter') {
    e.preventDefault();
    const validity = form.reportValidity();
    if (validity) {
      const url = getURL(searchBar.value);
      search(url);
    }
  }
}

window.addEventListener('keydown', searchByEnter);
