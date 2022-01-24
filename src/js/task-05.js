const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', () => inInputIntroduce())

function inInputIntroduce() {
    outputEl.textContent = `${inputEl.value}`
    if(inputEl.value === '') {
        outputEl.textContent = 'Anonymous'
    }
}