/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Аргументи і параметри
 * - return
 * - Повернення значення
 * - Параметри за замовчуванням
 * - Оголошення функції (function declaration)
 */

const fnA = function () {
  
}
console.log(fnB());

function fnB() {
  return 10;
}




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