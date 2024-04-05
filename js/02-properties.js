const magicBtn = document.querySelector('.js-magic-btn');

const {type} = magicBtn
console.dir(type);
console.log(magicBtn.getAttribute('type'));

magicBtn.type = 'button';
magicBtn.setAttribute('type', 'button')


magicBtn.hasAttribute('type')// true
magicBtn.removeAttribute('type')
/*
*  Для початку нагадаємо собі, 
*  як ми працюємо з об'єктами та його властивостями))
*/

const user = {
    name: 'Poly',
    email: 'poly@mail.com'
}

user.name//'Poly'
user.email = 'poly@gmail.com'
user.isOnline = true

// console.log(user);

/*
 * Властивостями елементів можуть бути атрибути(hero)
 * - Зображення
 * - Текст і textContent
 * - value
 * https://www.pexels.com/ru-ru/photo/14939897/
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
const titleRef = document.querySelector('.hero__title');
const imgRef = document.querySelector('.hero__image');

imgRef.alt = 'Hello!'
imgRef.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'

// console.log(titleRef.textContent);

titleRef.textContent = 'Киця';

// console.log(titleRef.textContent);
/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */





console.log(imgRef.getAttribute('src'));
console.log(imgRef.src);

imgRef.setAttribute("alt", "cat");

imgRef.removeAttribute('alt')

console.log(imgRef.hasAttribute('alt'));

// /*
//  * Data-атрибути
//  */
      