/*
 * Перебір через for...in і Object.keys|values|entries
 */

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
  };
  // Number Array Boolean Object

  const allKeys = Object.keys(feedback);
  console.log(allKeys);

// feedback.good
// feedback['good'];
// feedback['neutral'];
// feedback['bad'];

let total = 0;
  // for (const key of allKeys) {
  //   // console.log(feedback[key]);
  //   total += feedback[key]
  // }

// console.log(total);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);
//   total += value;
// }

// const entries = Object.entries(feedback)
// console.log(entries);

  // Number Array Boolean Object

  // const keys = Object.keys(feedback);
  // console.log(keys);

  // let totalFeedback = 0;

  // for (const key of keys) {
  //   // console.log(feedback[key]);

  //   totalFeedback += feedback[key]
  // }

  // console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);
//  console.log(values);

//  let totalFeedback = 0;

//   for (const value of values) {
//     console.log(value);

//     totalFeedback +=  value
//    }
//    console.log('totalFeedback: ', totalFeedback);

  //  const arr = Object.entries(feedback);

  //  console.log(arr);