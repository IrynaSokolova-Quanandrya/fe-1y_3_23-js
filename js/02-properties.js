const magicBtn = document.querySelector('.js-magic-btn');
/*
*  Для початку нагадаємо собі, 
*  як ми працюємо з об'єктами та його властивостями))
*/

// const obj = {
//     name: 'name',
//     age: 15,
//     city: 'kyiv',
// }

// console.log(obj.age);

// obj.school = 'Hogwards'

// console.log(obj);

// obj.age = 16;

// console.log(obj);
/*
 * Властивостями елементів можуть бути атрибути(hero)
 * - Зображення
 * - Текст і textContent
 * - value
 * https://www.pexels.com/ru-ru/photo/14939897/
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image')
// console.log(imageEl);

// imageEl.src = 'https://images.pexels.com/photos/14939897/pexels-photo-14939897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
// console.log(imageEl.src);

imageEl.alt = 'ку-ку';
// console.log(imageEl.alt);

const titleEl = document.querySelector('.hero__title');
titleEl.textContent = '';
// console.log(titleEl.textContent);

magicBtn.addEventListener('click', ()=>{
    const inputEl = document.querySelector('.js-input')
console.log(inputEl.value);
})

// const inputEl = document.querySelector('.js-input')
// console.log(inputEl.value);

// /*
//  * Атрибути
//  * - get(ім'я-атрибута)
//  * - set(ім'я-атрибута)
//  * - remove(ім'я-атрибута)
//  * - has(ім'я-атрибута)
//  */
console.log(imageEl.src);
console.log(imageEl.getAttribute('src'));

imageEl.src = 'https:images.pexels.com/photos/14939897/pexels-photo-14939897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
imageEl.setAttribute('src', 'https:images.pexels.com/photos/14939897/pexels-photo-14939897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

imageEl.removeAttribute('src');

console.log(imageEl.src);

// /*
//  * Data-атрибути
//  */
      