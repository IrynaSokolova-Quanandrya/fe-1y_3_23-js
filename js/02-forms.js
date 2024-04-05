/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
* - Назви колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent 
*/

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget
    const password = form.elements.email.value

    form.reset()
}



// function onFormSubmit(event) {
//     event.preventDefault();

// // const formData = new FormData()
// // console.log(formData);

//     const formElements = event.currentTarget.elements;

//     const email = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     const formData = {
//         email,
//         password,
//         subscription,
//     }

//     console.log(formData);
// }