const colorName = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', () => makeUpColor())

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function makeUpColor() {
  document.body.style.backgroundColor = getRandomHexColor()
  colorName.innerHTML = `${getRandomHexColor()}`
}

