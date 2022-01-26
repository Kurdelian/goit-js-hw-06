const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
    counterValue+=1;
    document.getElementById("value").innerHTML = counterValue;
})

decrementBtn.addEventListener("click", () => {
    counterValue-=1;
    document.getElementById("value").innerHTML = counterValue;
})