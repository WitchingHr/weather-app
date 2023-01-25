import pubsub from './pubsub';

function changeTheme(data) {
  if (data.temp <= 285.92) {
    document.documentElement.setAttribute('data-theme', 'cold');
  } else if (data.temp > 285.92 && data.temp <= 297.03) {
    document.documentElement.setAttribute('data-theme', 'mild');
  } else {
    document.documentElement.setAttribute('data-theme', 'warm');
  }
}

pubsub.subscribe('Data', changeTheme);

const meters = document.querySelectorAll('meter');
const fields = document.querySelectorAll('fieldset');

meters.forEach((meter) => {
  meter.addEventListener('click', (e) => {
    e.stopPropagation();
    const popup = e.target.nextElementSibling;
    popup.classList.toggle('popup-animate');
  });
});

fields.forEach((field) => {
  field.addEventListener('click', (e) => {
    e.stopPropagation();
    const popup = e.target.lastElementChild;
    popup.classList.toggle('popup-animate');
  });
});
