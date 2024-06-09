// 1
function sum(a, b) {
  return a + b;
}

// 2
function greet(name) {
  return `Hello, ${name}`;
}

// 3
function isEven(number) {
  return number % 2 === 0;
}

// 4
const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];

function squareArray(arr) {
  return arr.map(num => num * num);
}

// 5
const person = {
  name: 'John',
  age: 25,
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
};

// 6
function isAdult(person) {
  return person.age >= 18;
}

// 7
function cloneObject(obj) {
  return { ...obj };
}

// 8
function findMax(arr) {
  return Math.max(...arr);
}

// 9
function filterEvens(arr) {
  return arr.filter(num => num % 2 === 0);
}

// 10
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 11
{/* <button class="myButton">Click me</button>
<p class="myParagraph">Initial text</p> */}

  document.querySelector('.myButton').addEventListener('click', function() {
    document.querySelector('.myParagraph').innerHTML = 'Button clicked!';
  });

// 12
{/* <form class="myForm">
  <input type="text" class="myInput">
  <button type="button" class="submitButton">Submit</button>
</form> */}

  document.querySelector('.submitButton').addEventListener('click', function() {
    const inputValue = document.querySelector('.myInput').value;
    console.log(inputValue);
  });



