const inputEl = document.querySelector('#font-size-control')
const textEL = document.querySelector('#text')


inputEl.addEventListener('input', (e) => {
    const size = e.target.value;
    textEL.style.fontSize = size + 'px'
})
