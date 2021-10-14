function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsWrapEl = document.querySelector('#controls');
const inputEl = controlsWrapEl.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesWrapEl = document.querySelector('#boxes');

boxesWrapEl.classList.add("box-wrap")

let totalAmount = 0;

inputEl.addEventListener('input', onAmountOut);

function onAmountOut(event) {
  totalAmount = Number(event.currentTarget.value);
}

createBtn.addEventListener('click', () => {
  createBoxes(totalAmount);
  inputEl.value = ""
})


function createBoxes(amount) {

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = (20 + (i * 10)) + "px" ;
    box.style.height = (20 + (i * 10)) + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesWrapEl.append(box);
  }
}


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const arrayBoxes = [...boxesWrapEl.children];
  arrayBoxes.forEach(box => {box.remove()})
  }