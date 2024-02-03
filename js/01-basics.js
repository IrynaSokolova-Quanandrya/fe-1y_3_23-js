/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Аргументи і параметри
 * - return
 * - Повернення значення
 * - Параметри за замовчуванням
 * - Оголошення функції (function declaration)
 */

// const fnA = function () {
  
// }
// // console.log(fnB());

// function fnB() {
//   return 10;
// }


/**
 * Посилальний тип даних
 */
// let number = 5;
// const number2 = number;

// number = 25;

// console.log(number);
// console.log(number2);

// // console.log(number === number2);
// // console.log('Hello' === 'Hello');

// const arr1 = [];
// const arr3 = arr1;

// arr1.push(10)
// console.log(arr1);
// console.log(arr3);


// console.log(arr1 === arr3);
// console.log([1, 2, 3] === [1, 2, 3]);



/**
 * Callback function
 */

// const getUserName = function(){
//   console.log(`Hello, Mary`);
// }

// const logName = function(callback){
//   callback();
// }

// logName(getUserName)


const fnA = function () {}
function name() {}

const fnB = (name)=>{
  console.log(`Hi, ${name}!`);
}

fnB('Poly')


 /*
   * - Стек викликів
   * - Stack trace і пошук помилок
   */
  
  // const fnA = function() {
  //   console.log('Почала виконуватися [fnA]');
  //   fnB();
  //   console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
  // };
  
  // const fnB = function() {
  //   console.log('Виконується [fnB]');
  // };
  
  // console.log('Почав виконання [main]');
  // fnA();
  // console.log('Продовжив виконуватися [main] після виходу з [fnA]');