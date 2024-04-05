/*
 * Паттерн «Об'ект посилань»
 *
 * Події
 * - focus і blur
 * - input і change
 * - отримуємо значення інпута та замінюємо текст в спані
 * - Чекбокси та властивість checked
 * - робимо активну кнопку
 */


    const input = document.querySelector('.js-input');
    const nameLabel = document.querySelector('.js-button > span');
    const licenseCheckbox = document.querySelector('.js-license');
    const btn = document.querySelector('.js-button');
  

input.addEventListener('input', (event) => {
  console.log(event.currentTarget.value);

  nameLabel.textContent += event.currentTarget.value
})



  
  //   input.addEventListener('input', onInputChange);
  //   licenseCheckbox.addEventListener('change', onCheckboxChange)



  //   function onInputChange(event) {
  //     const inputValue = event.currentTarget.value;

  //     nameLabel.textContent = inputValue;
  //   }

  //   function onCheckboxChange(event) {
  //     // console.log(event.currentTarget.checked);
  //     // console.dir(btn.disabled);

  //        //  false       false
  //     btn.disabled = !event.currentTarget.checked
  //   }




    
  //  // function onFocusChange(evt) {
  //  //    console.log(evt.currentTarget.value);
  //  // }