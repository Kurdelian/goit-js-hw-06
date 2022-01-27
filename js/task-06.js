const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', () => testDataValidity())

function testDataValidity () {
    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    } 
    else {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
}
}

