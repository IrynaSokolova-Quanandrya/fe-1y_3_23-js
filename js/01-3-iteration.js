/*
 * Перебір через for...in і Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
  bad: 3,
};
  
const keys = Object.keys(feedback)
// console.log(keys);

for (const key of keys) {
  // console.log(feedback[key]);
}

const values = Object.values(feedback)
// console.log(values);

for (const value of values) {
  // console.log(value);
}
console.log(Object.entries(feedback));

console.log(feedback);
  // Number Array Boolean Object


  //ВАРІАНТИ ЗВЕРНЕННЯ ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА
        // const good = 'good';

        // feedback.good// 5
        // feedback['good']//5
        // feedback[good]//5

