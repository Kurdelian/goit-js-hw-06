const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

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
    document.getElementById("value").textContent = counterValue
}

