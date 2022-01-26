const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', () => testDataValidity())

function testDataValidity () {
    if (inputEl.value.length !== parseInt(inputEl.getAttribute('data-length'), 10)) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    } 
    else {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
}
}

