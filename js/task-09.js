const colorName = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', makeUpColor)

function makeUpColor() {
  document.body.style.backgroundColor = getRandomHexColor()
  colorName.textContent = document.body.style.backgroundColor
  console.log(body.style.backgroundColor)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
