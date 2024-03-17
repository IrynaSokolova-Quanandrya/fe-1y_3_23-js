/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */


// Створюємо заголовок

// const containerEl = document.querySelector('body')
// const listEl = document.querySelector('.site-nav')


const titleEl = document.createElement('h1');
titleEl.textContent = 'Привіт, це перший мій створений елемент!';
titleEl.classList.add('title');
titleEl.style.backgroundColor = 'tomato';
// console.log(titleEl); 

// containerEl.appendChild(titleEl);
// document.body.insertBefore(titleEl, listEl)

 /* Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */






/*
 * Створюємо і додаємо новий пункт меню
 */
const listEl = document.querySelector('.site-nav')

const itemEl = document.createElement('li');
itemEl.classList.add('site-nav__item');

const linkEl = document.createElement('a');
linkEl.href = '';
linkEl.classList.add('site-nav__link');
linkEl.textContent = 'Особистий кабінет';


// console.log(linkEl);

itemEl.appendChild(linkEl);
// console.log(itemEl);
// listEl.appendChild(itemEl)

listEl.append(itemEl)