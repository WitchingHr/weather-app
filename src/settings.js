import pubsub from './pubsub';

function openSettings() {
  const drawer = document.querySelector('.settings-modal');
  drawer.classList.toggle('open-menu');
}

const button = document.querySelector('.settings-icon');
button.addEventListener('click', openSettings);

const slider = document.querySelector('.round');
slider.addEventListener('click', () => {
  setTimeout(() => {
    openSettings();
  }, 600);
});

const checkbox = document.getElementById('temp');

const high = document.querySelector('.high');
const low = document.querySelector('.low');
const temp = document.querySelector('.temp');
const feels = document.querySelector('.feels-temp');
const unit = document.querySelector('.temp-unit');

function convertFtoC(num) {
  const number = (num - 32) * 0.5556;
  return Math[number < 0 ? 'ceil' : 'floor'](number); // truncate decimals
}

function convertCtoF(num) {
  const number = num * 1.8 + 32;
  return Math[number < 0 ? 'ceil' : 'floor'](number); // truncate decimals
}

function convertTemps() {
  setTimeout(() => {
    if (checkbox.checked) {
      const highVal = high.innerHTML.replace('°', '');
      high.innerHTML = `${convertFtoC(highVal)}°`;
      const lowVal = low.innerHTML.replace('°', '');
      low.innerHTML = `${convertFtoC(lowVal)}°`;
      const feelsVal = feels.innerHTML.replace('°', '');
      feels.innerHTML = `${convertFtoC(feelsVal)}°`;
      temp.innerHTML = convertFtoC(temp.innerHTML);
      unit.innerHTML = unit.innerHTML.replace('F', 'C');
      pubsub.publish('Unit', 'C');
    }
    if (!checkbox.checked) {
      const highVal = high.innerHTML.replace('°', '');
      high.innerHTML = `${convertCtoF(highVal)}°`;
      const lowVal = low.innerHTML.replace('°', '');
      low.innerHTML = `${convertCtoF(lowVal)}°`;
      const feelsVal = feels.innerHTML.replace('°', '');
      feels.innerHTML = `${convertCtoF(feelsVal)}°`;
      temp.innerHTML = convertCtoF(temp.innerHTML);
      unit.innerHTML = unit.innerHTML.replace('C', 'F');
      pubsub.publish('Unit', 'F');
    }
  }, 100);
}

slider.addEventListener('click', convertTemps);
