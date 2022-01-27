const inputEl = document.querySelector(`#name-input`);

const outputEl = document.querySelector(`#name-output`);


const outputText = outputEl.textContent;

inputEl.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  return event.currentTarget.value !== ``
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = outputText);
}