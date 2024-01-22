/*
 * Псевдомасив arguments і Array.from і ...rest
 */


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
     * - після першого аргумента може бути довільна кількість інших аргументів які будуть числами,
     * - Функція повина повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого,
     *   для яких є аналог в оригінальному масив.
     */
    
    // const filterNumbers = function (arr, param1, param2, ...args) {
    //   console.log(arr);
    //   console.log(param1);
    //   console.log(param2);
    //   console.log(args);
    // };
    
    // console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
    // console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
    // console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

