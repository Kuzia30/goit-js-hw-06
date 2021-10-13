function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetEl = document.querySelector('.widget');
const bodyEl = widgetEl.parentNode;
const colorTextEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color');

changeColorBtnEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
});

