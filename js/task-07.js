const inputEl = document.querySelector('#font-size-control')
const textEL = document.querySelector('#text')
console.log(inputEl)

inputEl.addEventListener('input', () => sizeChаnge())

function sizeChаnge () {
    textEL.style.fontSize = `${inputEl.value}px`
}