const magicBtn = document.querySelector('.js-magic-btn');

// Об'єкт window та document



console.dir(document);

/*
 * document.querySelector(selector, шукає до першого співпадіння) і
 * document.querySelectorAll(selector, отримуємо масив всіх елементів)
 * selector - будь-який валідний CSS-селектор
 *  
 * Що повертають?
 * Правила назви змінних!!!
 * Як відбувається парс!!!
 */

const buttonRef = document.querySelector('.js-magic-btn')
console.log(buttonRef);

const listRef = document.querySelector('.site-nav')
console.log(listRef);

const linkRef = listRef.querySelector('.site-nav__item')

const itemRef = document.querySelector('.site-nav__item')
console.log(itemRef);

const linksRef = document.querySelectorAll('.site-nav__link')
console.log(linksRef);


// const navListEl = document.querySelector('.site-nav');
// console.log(navListEl);

// const itemEl = document.querySelectorAll('.site-nav .site-nav__item')
// console.log(itemEl);

// const navRef = document.querySelector('.site-nav');
// // console.log(navRef);

// const navItemRef = document.querySelectorAll('.site-nav__item');
// console.log(navItemRef);


/*
 * Document.querySelector* і Element.querySelector*
 */





