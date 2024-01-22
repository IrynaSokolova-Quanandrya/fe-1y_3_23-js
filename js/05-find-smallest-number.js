/*
 * Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

const findSmallesNumber = numbers => {
    let min = numbers[0];
    for (const number of numbers) {
        if (min > number) {
            min = number;
        }
    }
    return min;
  }
  
    console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
    console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
    console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4