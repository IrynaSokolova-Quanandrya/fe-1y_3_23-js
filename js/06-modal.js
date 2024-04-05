/*
 * 1. Відкрити і закрити по кнопці
 * 2. Закрити по кліку в бекдроп: onBackDropClick
 * 3. Закрити по ESC: onEscapeKeypress
 *
 * В CSS вже э клас show-modal, який необхідно додати на body при выдкритті модалки
 */

/*
* АЛГЛРИТМ ДІЇ
* 1. Вішаємо слухача на кнопки відкрити та закрити
* 2. Сворюємо колбекі, додаємо і знімаємо клас 
* 3. Реалізуємо закриття модалки по бекдропу:
* 3.1 робимо перевірку target === currentTarget
* 4. Реалізовуємо закриття по esc:
* 4.1 вішаємо слухача на window
* 4.2 знымаэмо слухача з window
* 4.3 робимо перевірку на натиснення по потрібній клавіші ESC
*/


    const openModalBtn = document.querySelector('[data-action="open-modal"]');
    const closeModalBtn = document.querySelector('[data-action="close-modal"]');
    const backdrop = document.querySelector('.js-backdrop');
    
  
  openModalBtn.addEventListener('click', onBtnClickOpen);
  closeModalBtn.addEventListener('click', onBtnClickClose);
  backdrop.addEventListener('click', onBackdropClose);
  
  
  function onModalEscClose(evt){
    console.log(evt);
      if (evt.code === "Escape"){
          onBtnClickClose()
      }
  };

  function onBtnClickOpen() {
    document.body.classList.add('show-modal');
    window.addEventListener("keydown" , onModalEscClose);
  }

  
  function onBtnClickClose() {
    document.body.classList.remove('show-modal');
    window.removeEventListener("keydown" , onModalEscClose);
  }

  function onBackdropClose(event) {
    console.log('currentTarget: ', event.currentTarget);
    console.log('target: ', event.target);
    if(event.currentTarget === event.target){
      onBtnClickClose();
    }    
  }





  document.addEventListener("keydown", event => {
    event.preventDefault();
   
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
      console.log("«Ctrl + s» or «Command + s» combo");
    }
   });
   
   
   
  
 
