const listCategoriesLength = document.querySelector('#categories').children.length
console.log(`Number of categories: ${listCategoriesLength}`)

const categoriesItemArray = document.querySelectorAll('.item')

const categoriesItem = [...categoriesItemArray].map(categorie => `Category: ${categorie.children[0].textContent} Elements: ${categorie.children[1].children.length}`).join('\n')
console.log(categoriesItem);