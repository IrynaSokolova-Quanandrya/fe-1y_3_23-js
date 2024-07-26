// import '../css/common.css';
// import '../css/feedback-form.css';

/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */
const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

formRef.addEventListener('submit', handleFormSubmit);
textareaRef.addEventListener('input', handleTextareaInput);
getValueFromLocalStorage()
/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */
function handleTextareaInput(event) {
    const message = event.currentTarget.value    
    localStorage.setItem('message', message)
}

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function getValueFromLocalStorage() {
  const message = localStorage.getItem('message')
    textareaRef.value = message
}









// formRef.addEventListener('input', handleInputValue);

// const formData = {}

// function handleInputValue(e){
//     console.log(e.target.name);
//     console.log(e.target.value);

//     formData[e.target.name] = e.target.value;
    
//     localStorage.setItem('formData', JSON.stringify(formData))
// }


/*
 * - Зупиняєм поведінку за замовчуванням
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
function handleFormSubmit(event) {

}





// ДОДАТКОВО
// зробити так щоб зберігало не тільки повідомлення, 
// але і ім'я і все в одному об'єкті








// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });