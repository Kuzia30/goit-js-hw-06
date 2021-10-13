const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
sizeControlEl.addEventListener('input', onSizeTextChange);
function onSizeTextChange(event) {
textEl.style.fontSize = event.currentTarget.value + 'px'
}
