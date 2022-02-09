const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const text = document.querySelector('#value')

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
    counterValue+=1;
    makeCounterValue()
})

decrementBtn.addEventListener("click", () => {
    counterValue-=1;
    makeCounterValue()
})

function makeCounterValue () {
   text.textContent = counterValue
}

