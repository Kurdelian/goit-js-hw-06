const categoriesEl = document.querySelectorAll('.item')

const categoriesElLenght = categoriesEl.length;
console.log(`Number of categories: ${categoriesElLenght}`)

categoriesEl.forEach(function (element) {
    const categoriesTitle = element.firstElementChild.textContent
    const categoriesLength = element.lastElementChild.querySelectorAll('li')

    console.log(`Category: ${categoriesTitle}`)
    console.log(`Elements: ${categoriesLength.length}`)
})