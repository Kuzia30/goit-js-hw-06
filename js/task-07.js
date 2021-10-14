const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = sizeControlEl.value + 'px';
sizeControlEl.addEventListener('input', onSizeTextChange);
function onSizeTextChange(event) {
textEl.style.fontSize = event.currentTarget.value + 'px'
}
