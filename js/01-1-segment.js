/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначень x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */
//                  10                      30 
// ================================================================
//                  x1                      x2
const x1 = 10;
const x2 = 30;
const number = 40;

console.log(`Число ${number} потрапляє у відрізок до ${x1}? `, number < x1);

console.log(`Число ${number} потрапляє у відрізок після ${x2}? `, number > x2);

console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}?`, number > x1 && number < x2);

//number > x1 && number < x2\
//35 > 10 && 35 < 30
// true && false 
//false

//number > x1 && number < x2\
//20 > 10 && 20 < 30
// true && true 
//true

console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}?`, x1 > number || number > x2);

//x1 > number || number > x2
//10 > 40 || 40 > 30
//false || true
// true
