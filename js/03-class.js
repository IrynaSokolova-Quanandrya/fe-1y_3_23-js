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
    constructor({name, modal,  color = 'white'}) {
        this.modal = modal
        this.color = color
        this.name = name
    }

    getModal() {
        console.log(this.modal);
    }

    changeColor(newColor) {
        this.color = newColor
    }
}

const car1 = new Car({modal: 'A3', name: 'Audi', color: 'black'});//{model: 'A3', name: 'Audi', color:'black'}
const car2 = new Car({ modal: 'A6', name: 'Audi', color: 'red' });
console.log(car2);
car2.changeColor('green')
console.log(car2);

const car3 = new Car({name: 'Audi', modal: 'A3'});
car1.getModal();

// console.log(car1);
// console.log(car2);
// console.log(car3);