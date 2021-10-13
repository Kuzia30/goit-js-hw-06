const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
sizeControlEl.addEventListener('input', changeSizeText);
function changeSizeText(event) {
textEl.style.fontSize = event.currentTarget.value + 'px'
}
