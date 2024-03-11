/*
 * Класи
 * 🐷 - об'явлення (Car)
 * 🐷 - конструктор
 * 🐷 - методи 
 * 🐷 - static(description, logInfo)
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей та методи класів
 * 🐷 - Геттери та сеттери
 */

class Car {
    constructor(model, price, year, color){
        this._model = model
        this._price = price
        this.year = year
        this.color = color
    }

    get model(){
        console.log(this._model);
    }

    set price(newPrice){
        this._price = newPrice;
    }
    // getModel(){
    //     console.log(this.model);
    // }

    // changePrice(newPrice){
    //     this.price = newPrice;
    // }
}

const audi = new Car('A5', 40000, 2020, 'black');
audi.model;
audi.price = 50000;
// audi.getModel();
// audi.changePrice(45000);
// console.log(audi);

const mazda  = new Car('mazda-3', 35000, 2022, 'red');
// mazda.getModel();
// mazda.changePrice(40000);
// console.log(mazda);







// 'A5', 40000, 2020, 'black'
// 'mazda-3', 35000, 2022, 'red'

// function Car (model, price, year, color){
//     this.model = model;
//     this.price = price;
//     this.year = year;
//     this.color = color;     
// }

// Car.prototype.changePrice = function(newPrice){
//     this.price = newPrice;
// }

// Car.description = 'Це функція конструктор!'

// // console.log(Car.model);
// const carInstance = new Car();
// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);


// const mazda = new Car('mazda-3', 35000, 2022, 'red');
// console.log(mazda);

// 1

// class Animal {
//     constructor({name, age}){
//         this.#name = name
//         this.#age = age
//     }
//     #name
//     #age

//     getAge(){
//         console.log(this.#age)
//     }
// }

// const dog = new Animal({
//   name: "Bobik",
//   age: "5",
// })

// dog.getAge()
// 2

// class Dog extends Animal{
//     static legsCount = 4
//     bark(){
//         console.log("Woof!") 
//     }
// }

// const animal = new Dog({
//    legsCount: 4,
// })

// animal.bark()
// 3

// class GuideDog extends Dog{
//     constructor(name, age, isTrained){
//         super(name, age)
        
//         // console.log('name:', name);
//         // console.log('age:', age);
//         this.#isTrained = isTrained
//     }
    
//     #isTrained

//     leadBlind(){
//         console.log("Following the guide dog")
//     }
//     getInfo(){
//         // console.log(`Name: ${this.name}, age: ${this.age}, trained: ${this.#isTrained}`)
//     }
// }

// const guide = new GuideDog("yes", "Barsik", 8)

// console.log(guide);
// guide.leadBlind()
// guide.getInfo()

class Animal {
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    getAge() {
      return this.#age;
    }
  }
  
  class Dog extends Animal {
    static legsCount = 4;
  
    bark() {
      return "Woof!";
    }
  }
  
  class GuideDog extends Dog {
    #isTrained;
  
    constructor(name, age, isTrained) {
      super(name, age);
      this.#isTrained = isTrained;
    }
  
    leadBlind() {
      return "Following the guide dog";
    }
  
    getInfo() {
      return `Name: ${this.#name}, Age: ${this.#age}, Legs count: ${Dog.legsCount}, Trained: ${this.#isTrained}`;
    }
  }
  
  const myGuideDog = new GuideDog("Buddy", 3, true);
  console.log(myGuideDog.getInfo());
  console.log(`Legs count: ${Dog.legsCount}`);
  console.log(myGuideDog.bark());
  