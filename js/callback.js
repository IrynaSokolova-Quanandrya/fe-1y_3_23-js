/*
 * Функція зворотного виклику (callback)
 * - Функція може приймати інші функції як параметр
 * - Функція яка передається іншій функції як аргумент називається
 *   «Функція зворотного (відкладеного) виклику» (callback-функция)
 * - Функція яка приймає другу функцію як параметр
 *   або повертає функцію як результат своєї роботи називається «функциія вищого порядку»
 */

const fnA = function (callback) {
    const a = 5
    callback(a)
}

const fnB = function (number) {
    console.log(number);
}

fnA(fnB);
fnA(5)
fnA('hello')
fnA({ a: 5 })
fnA([])


// const a = 1;
// const b = function () {};



// const fnB = function () {
//     console.log("Hello");
// }

// const fnA = function (cb) {
//     console.log(cb);
// }

// fnA(fnB)

/*
 * Відкладений виклик: реєстрація подій
 */

// const btn = document.querySelector(".js-button");

// btn.addEventListener('click', function () {
//     console.log("Клікнули по кнопці");
// })

