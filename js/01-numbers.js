/*
 * Парс числа з Number.parseInt() та Number.parseFloat()
 */

const elementWidth = '50px';

const parsedElementWidth = Number.parseInt(elementWidth);
// console.log(parsedElementWidth);

const elementHeight = '200.74px';
const result = Number.parseFloat(elementHeight);
// console.log(result);

/*
 * - Метод число.toFixed(digits)
 * - Матрьошки на пркладі console.log(Number(число.toFixed(digits)))
 */
const salary = 1300.16472;
// console.log(salary);
 
// console.log(Number(salary.toFixed(1)));


/*
 * - Приведення до числа з Number(value)
 * - Значення NaN (Not a Number) і метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Цей рядок неможливо перетворити в число';

// console.log(Number.isNaN(value));
/*
 * Об'ект Math
 * - Возведення в степінь
 * - Exponent operator **
 */

const base = 2;
const power = 5;


const minNumber = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт який просить у користувача ввести число і степінь,
 * підводить число в цю степінь і виводить результат в консоль.
 */

// Алгоритм рішення:
// 1. Попросити користувача число - prompt() і записати значення в зміну base
// 2. Попросити користувача число - prompt() і записати значення в зміну power
// 3. Створити зміну і записати в неї результат підведення в степінь
// 4. Вивести результат в консоль




/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */
const randomNumber = Math.round(Math.random() * (50 - 15) + 15)
console.log(randomNumber);


const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;