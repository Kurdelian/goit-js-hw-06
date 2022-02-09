const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')
const inputEl = document.querySelector('#controls input')

createButton.addEventListener('click', getValue)
destroyButton.addEventListener('click', destroyBoxes)

function getValue(event) {
    const value = inputEl.value;
    createBoxes(value)
}

function createBoxes(value) {
    const normalSize = 30;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < value; i++) {
        const size = normalSize + i * 10;
        const div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
    inputEl.value = ''
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

boxes.style.display = 'flex';