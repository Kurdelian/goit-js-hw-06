const categoriesEl = document.querySelectorAll('ul#categories>li.item')

const categoriesElLenght = categoriesEl.length;
console.log(`Number of categories: ${categoriesElLenght}`)

categoriesEl.forEach(function (element) {
    const categoriesTitle = element.firstElementChild.textContent
    const categoriesLength = element.lastChild.length

    console.log(`Category: ${categoriesTitle}`)
    console.log(`Elements: ${categoriesLength}`)
})