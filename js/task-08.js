const formEl = document.querySelector('.login-form')
console.log(formEl)

formEl.addEventListener('submit', onFormElSubmit)

function onFormElSubmit(event) {
event.preventDefault();

let formElements = {}

const {elements: {email, password}} = event.currentTarget
if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены!')
}

formElements.email = `${email.value}`
formElements.password = `${password.value}`
console.log(formElements)

event.currentTarget.reset()
}

