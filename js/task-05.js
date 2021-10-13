const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
inputText.addEventListener("input", onTextAdd);

function onTextAdd(event) {
    if (event.currentTarget.value !== "") {
        outputText.textContent = event.currentTarget.value;
    } else {
        outputText.textContent = 'Anonymous';
    }
}
