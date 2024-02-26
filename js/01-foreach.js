/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */

// array.method(callback[currentValue, index, array])

const numbers = [5, 10, 15, 20, 25];
let total = 0

// const forEach = function (arrNumbers, callback) {
//     for (const number of arrNumbers) {
//         callback(number)
//     }
// }

// const callback = function (number) {
//    total += number
//     console.log('число всередині колбеку: ', number);
// }
// forEach(numbers, callback)


numbers.forEach(function (number, index, array) {
   total += number
    console.log('число всередині колбеку: ', number);
    
    console.log('індекс всередині колбеку: ', index);
})

console.log('total: ', total);