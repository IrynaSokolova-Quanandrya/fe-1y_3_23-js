// - Обробка помилок з try...catch
//   - Синтаксис
//   - Які помилки відловлює
//     - ❌ етап оцінки (читання) - помилки парсинга (parsing errors)
//     - ✅ етап виконання скрипта - помилки виконання (runtime errors)
//   - Ловить тільки помилки в синхроному коді
//     - Як зловити помилку в асинхроному коді
//   - Об'єкт помилки
//     - name
//     - message
//     - stack
//   - Блок catch без помилки


 try {
    console.log('Код в середині try...catch');
   setTimeout(() => { 
        try {
           userName; 
        } catch (error) {
          console.log(error);
        }                             
      },500)

  console.log('Код після userName');
  } catch (error) {
    console.log('Помилка');
  }
console.log('Код після try...catch');
  


// userName;