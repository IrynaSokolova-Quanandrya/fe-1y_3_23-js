const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const linkEl = document.querySelector('.site-nav__link')
linkEl.classList.add('site-nav__link--current');
console.log(linkEl.classList.contains('site-nav__link--current'));
linkEl.classList.remove('site-nav__link--current');
linkEl.classList.replace('site-nav__link', 'site-nav__link--current')
magicBtn.addEventListener('click', ()=>{
    linkEl.classList.toggle('site-nav__link--current')
})






// // Робимо приклад з current сторінкою