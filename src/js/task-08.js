const formEl = document.querySelector('.login-form')
console.log(formEl)

formEl.addEventListener('submit', onFormElSubmit)

function onFormElSubmit(event) {
event.preventDefault();

const formElements = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
}

if (formElements.email === '' || formElements.password === '') {
    alert('Все поля должны быть заполнены!')
}

formEl.reset()
console.log(formElements)

}

