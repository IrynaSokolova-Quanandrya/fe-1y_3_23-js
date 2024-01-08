/*
 * Знайомство з масивами
 * - Объявлення
 * - Індексація
 * - Довжина
 * - Індекс останнього елемента
 * - Переопреділення
 * - Ітерація
 */

const array = [1, 2, 3, 5, 5, 5, 5]; 

// console.log(array);

// console.log(array[0]);


/*
 * Передача по посиланню і по значенню
 * - Примітиви і складні типи данних
 * - Посисальна рівність (referential equality)
 */

let a = 4;
let b = a;

// console.log(a === b); true

// console.log(b);
// console.log(a);

// a = 5;
// console.log(a);
// console.log(b);
// b = a;

// console.log(b);
        //   0 1 2 3 4
const arr1 = [1,2,3,4,5];
const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

arr1[0] = 10;

// console.log(arr1);
// console.log(arr2);

arr2[0] = 20;

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

const arr3 = [];
const arr4 = [];
// console.log(arr3 === arr4);

/*
 * Перебор (ітерація) масиву
 * - for - якщо потрібен індекс або потрібно змінити елемент масиву
 * - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
 */

const names = ['Ola', 'Fedir', 'Nastia', 'Mary'];

// for (let i = 0; i < names.length; i += 1) {
//     names[i] += '!'
//     console.log(names[i]);    
// }

// const numbers = [1,2,3,4,5];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i]   
// }

// for (const number of numbers){    
//     number += '!';
//     console.log(number);
// }
// console.log(total);


// Методи split() і join()

// Методи indexOf() і includes()

// Методи push(), pop(), shift(), unshift()

// // Метод slice()

// Метод splice()

// Метод concat()