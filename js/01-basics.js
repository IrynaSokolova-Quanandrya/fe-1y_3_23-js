/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Оголошення функції (function declaration)
 * - Аргументи і параметри
 * - return
 * - Повернення значення
 * - Параметри за замовчуванням
 */

const fnA = function () {
    console.log('hello');
    alert(`Hello, Egor`)
    return 10;
}

const result1 = fnA('Ira');
console.log(result1);

const result2 = fnA('Marina');
console.log(result2);

const result3 = fnA('Egor');
console.log(result3);

fnA('lkjgj')


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