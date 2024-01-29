/*
 * Псевдомасив arguments і Array.from і ...rest
 */

const calculateTotalPrice = function (parm1, ...args){
      // const args = Array.from(arguments) 
console.log(args);

      let total = 0;

      for(let hgh of args){
         total +=hgh
      }
      return total;
}

const result = calculateTotalPrice(1, 2, 3);
console.log(result);
calculateTotalPrice(5, 10, 15, 20)
calculateTotalPrice(100, 200, 300)








// const fnB = function(...args){
//     console.log(args);
// }

// fnB(5, 10, 15, 25, 35);
// fnB(5, 10);
// fnB(15, 25, 35);



/*
 * Напиши функцію add для додавання довільної кількості аргументів (чисел)
 * - Операція ... (rest)
 */

    
    /*
     * Напиши функцію filterNumbers(array [, number1, ...]) яка:
     * - першим аргументом приймає масив чисел
     * - після першого аргумента може бути довільна кількість інших аргументів які 
     *    будуть числами,
     * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, 
     *    починаючи з другого,
     *   для яких є аналог в оригінальному масив.
     */
    
    const filterNumbers = function (array, ...args) {
      const equalNumbers = [];

      for(let number of args){
          const isEqual = array.includes(number);
          if (isEqual){
              equalNumbers.push(number);
          }
      }
      return equalNumbers;
  }
//1 - 10 - false
//2 - 15 - false
//3 - 2 - true + []
//4 - 3 - true + []


    console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

