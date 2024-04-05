/*
 * Властивості «навигації» по DOM-вузлам (використати список)
 */

// window.alert()
// window.console.log()
// window.document

// console.log(document);
const firstItemRef = document.querySelector('.site-nav__item');
const listRef = firstItemRef.parentNode
const secondItemRef = firstItemRef.nextElementSibling

console.log(firstItemRef.nextElementSibling);



// const itemsEl = listEl.children;
// console.log(listEl.lastElementChild);


// const itemEl = document.querySelectorAll('.site-nav__item');
// console.log(itemsEl);

