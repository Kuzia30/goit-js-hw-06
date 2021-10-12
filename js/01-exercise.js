const listCategories = document.querySelector('#categories');
const itemsCategories = listCategories.children;
function countCategories(array) {
console.log('Number of categories:' + array.length);
}





const arrayCategories = document.querySelectorAll('.item');

const findElementsCategory = function (array) {
array.forEach(outputInConsole)
}

function outputInConsole(category) {
    const categoryTitle = category.firstElementChild.textContent;
    const categoryTotalElements = category.lastElementChild.children.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryTotalElements}`); 
}

countCategories(itemsCategories);
findElementsCategory(arrayCategories);