/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості KeyboardEvent.key та KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
 window.addEventListener('keydown', onKeypress)

 function onKeypress(event){
  // console.log(event);
  console.log('event.code: ', event.code);
  console.log('event.key: ', event.key);
  console.log(event.target.nodeName);

  refs.output.textContent += event.code;

 }


// GAME

/*const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'w', 'e', 'r'];
let currentKeyIndex = Math.floor(Math.random() * keys.length);
const keyElement = document.getElementById('key');
keyElement.textContent = keys[currentKeyIndex];
document.addEventListener('keydown', (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex = (currentKeyIndex + 1) % keys.length;
    keyElement.textContent = keys[currentKeyIndex];
  } else {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Натиснуто неправильну клавішу!';
  }
});
document.addEventListener('keypress', (event) => {
  event.preventDefault();
});
const newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('click', () => {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
  messageElement.textContent = 'Натисни відповідну клавішу на клавіатурі';
});
*/

// Slider

/*const gallery = document.querySelector('.gallery');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const images = document.querySelectorAll('.image');

let currentImageIndex = 0;


document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = images.length - 1;
    }
    const imageUrl = images[currentImageIndex].src;
    fullImage.src = imageUrl;
  } else if (event.code === 'ArrowRight') {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0;
    }
    const imageUrl = images[currentImageIndex].src;
    fullImage.src = imageUrl;
  } else if (event.code === 'Escape') {
    fullImageContainer.style.display = 'none';
  }
});
*/






 
// Отримати посилання на список завдань
const taskList = document.getElementById("taskList");

// Додати обробник події для додавання нового завдання
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Заборонити стандартну поведінку форми

  const newTaskInput = document.getElementById("newTask");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText.length > 0) {
    // Створити новий елемент завдання
    const newTask = document.createElement("li");
    const newTaskTextSpan = document.createElement("span");
    const newTaskDeleteButton = document.createElement("button");
    const newTaskCheckbox = document.createElement("input");

    newTaskDeleteButton.textContent = "Delete";
    newTaskDeleteButton.classList.add("deleteButton");
    newTaskCheckbox.type = "checkbox";
    newTaskTextSpan.textContent = newTaskText;

    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskTextSpan);
    newTask.appendChild(newTaskDeleteButton);
    taskList.appendChild(newTask);

    // Очистити поле введення
    newTaskInput.value = "";
  }
});

// Додати обробник події для видалення завдання
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
});

// Додати обробник події для відмітки виконання завдання
taskList.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const listItem = event.target.parentNode;
    if (event.target.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  }
});



