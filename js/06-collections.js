/*
 * Створюємо і додаємо колекцію
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];
  
  const colorPickerContainerEl = document.querySelector('.js-color-picker');
  
  const option = colorPickerOptions[0]

  // const btnEl = document.createElement('button');
  // btnEl.classList.add('color-picker__option');
  // btnEl.textContent = option.label;
  // btnEl.style.backgroundColor = option.color;
  // btnEl.type = 'button';

  // console.log(btnEl);

  // colorPickerContainerEl.appendChild(btnEl);
  
const fnA = function (params) {
  
}
  function name(params) {
    
  }

  const fnB = ()=>{}

  (param)=>{}

const btnElems = colorPickerOptions.map((option)=>{
  const btnEl = document.createElement('button');
  btnEl.classList.add('color-picker__option');
  btnEl.textContent = option.label;
  btnEl.style.backgroundColor = option.color;
  btnEl.type = 'button';

  return btnEl
})

  console.log(...btnElems);

  colorPickerContainerEl.append(...btnElems)
  
  
  /*
   * Пишемо функцію для створення розмітки колорпікеру
   */

  