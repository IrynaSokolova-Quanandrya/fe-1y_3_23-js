/*
* Прототип об'єкту
* Object.create()
* [[Prototype]]
* Ланцюг прототипів
*/
// Що таке прототипне наслідування, малюю приклад
// Як створити прототип для нового об'єкту

// const a = {
//     name: 'Poly',
//     changeName(name) {
//         this.name = name;
//     }
// }



//     a.changeName('Kiwi')
   
//     console.log([]);
// [].push()


const a = {
    a: 5
}

const b = {
    b: 10
}
 

const c = Object.create(b)

c.c = 15

console.log(c);
console.log(c.b);

/**
 * Правило пошуку властивостей в ланцюжку прототипів 
 * Властивість hasOwnProperty
 */


// Створюємо лічильник з ДЗ

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
const counter = {
    counterValue: 0,

    increment() {
        console.log(this);
        this.counterValue += 1;
        valueEl.textContent = this.counterValue;
    },

    decrement (){
        this.counterValue -= 1;
        valueEl.textContent = this.counterValue;
    }
}

incrementBtn.addEventListener('click', counter.increment.bind(counter));
decrementBtn.addEventListener('click', counter.decrement.bind(counter));





// let counterValue = 0;

// function increment() {
//     counterValue += 1;
//     valueEl.textContent = counterValue;
//     console.log('Збільшуємо значення лічильника на 1');
// }

// function decrement (){
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
//     console.log('Зменшуємо значення лічильника на 1');
// }

