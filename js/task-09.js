const colorName = document.querySelector('.color')
const button = document.querySelector('.change-color')
const body = document.querySelector('body')

button.addEventListener('click', () => makeUpColor())

function makeUpColor() {
  body.style.backgroundColor = getRandomHexColor()
  colorName.textContent = body.style.backgroundColor
  console.log(body.style.backgroundColor)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
