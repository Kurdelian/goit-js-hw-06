const inputEl = document.querySelector('#font-size-control')
const textEL = document.querySelector('#text')


inputEl.addEventListener('input', (event) => {
    const size = event.currentTarget.value;
    textEL.style.fontSize = `${size}px`;
    console.log(event.currentTarget.value)
})
