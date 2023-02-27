

const allCategoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', allCategoriesEl.length);
 allCategoriesEl.forEach(element => {
 const titleEl = element.firstElementChild;
 const liLenthg = element.lastElementChild.children;

 console.log('Category:', titleEl.textContent, '\n Elements:', liLenthg.length);
 }

 )