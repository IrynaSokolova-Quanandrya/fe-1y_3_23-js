const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.style.color = 'red';
magicBtn.style.backgroundColor = 'teal'



/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const navListRef = document.querySelector('ul')
navListRef.classList.add('nav-list')
navListRef.classList.add('js-nav-list')

navListRef.classList.remove('js-nav-list')

navListRef.classList.toggle('nav-list')
navListRef.classList.toggle('nav-list')
navListRef.classList.toggle('js-nav-list')

navListRef.classList.replace('js-nav-list', 'new-class')

console.log(navListRef.classList.contains('ew-class'));
console.log(navListRef.classList);


console.dir(navListRef);





// // Робимо приклад з current сторінкою