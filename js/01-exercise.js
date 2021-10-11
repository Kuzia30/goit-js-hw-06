const listCategories = document.querySelector('#categories');
const itemsCategories = listCategories.children;
function countCategories(array) {
console.log('Number of categories:' + array.length);
}





const arrayCategories = document.querySelectorAll('.item');

const findElementsCategory = function (array) {
    array.forEach(category => {
        const categoryTitle = category.firstElementChild.textContent;
        const categoryTotalElements = category.lastElementChild.children.length;
        return console.log(`Category: ${categoryTitle}
Elements: ${categoryTotalElements}`)
    }) 
}

countCategories(itemsCategories);
findElementsCategory(arrayCategories);