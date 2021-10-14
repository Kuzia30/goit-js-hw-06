function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsWrapEl = document.querySelector('#controls');
const inputEl = controlsWrapEl.firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesWrapEl = document.querySelector('#boxes');
let totalAmount = 0;
let size = 20;

boxesWrapEl.classList.add("box-wrap")



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
    const styleBox = box.style;
    size = size + 10;
    styleBox.width = size + "px" ;
    styleBox.height = size  + "px";
    styleBox.backgroundColor = getRandomHexColor();
    boxesWrapEl.append(box);
  }

}


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const arrayBoxes = [...boxesWrapEl.children];
  arrayBoxes.forEach(box => {
    box.remove();
    size = 20;
  })
  }