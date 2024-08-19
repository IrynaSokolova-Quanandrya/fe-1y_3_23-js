/*
 * Створення промісу
 *  - Клас Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 *  - catch()
 *  - then()
 *  - finally() 
 * - 'https://pokeapi.co/api/v2/pokemon/5'
 */


const promise = new Promise((resolve, reject) => {
  const isFulfilled = Math.random() > 0.5

  if (isFulfilled) {
    resolve('Проміс виконався успішно')
  }  
  reject('Ой, щось пішло не так, проміс відхилено')
})

// console.log(promise);
promise
  .then(result => {
    console.log('result: ', result)
    return 5
  })
  .then(data => {
    
    console.log(data)
    return data
  })
  .then(res => console.log(res))
  .catch(error => console.log(error))
  .finally(()=>{console.log('Я виконуюсь завжди');})














// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }








/*
 * Ланцюжки Промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду виконаний в любому випадку'));
