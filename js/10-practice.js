/* 
1. Отримати текст з елемента з класом "page-title" та 
змінити його на "Новий заголовок".

2. Отримати текст з елемента з класом paragraph  
та замінити "Це абзац тексту." на текст рибу.

3. Отримати список елементів з класом list 
маркованого списку.

4. Отримати зображення з класом "image"
та замінити його атрибут src на 
будь-яке інше зображення.

5. Отримати останній елемент з класом "section-title" 
та змінити його текст на "Новий заголовок".

6. Отримати останній елемент з класом table-cell 
та змінити його текст на "Оновлене значення".

7. Отримати всі елементи з класом footer-text 
та додати до них новий клас highlight зі стилями.

8. Отримати елемент з класом navigation та змінити 
його стиль background-color на "lightblue".

*/

// У кожній області видимості буде створена своя, незалежна змінна value

console.log(value); // ReferenceError: value is not defined
const value = 5;
console.log(value); // 5

if (true) {
  console.log(value); // ReferenceError: value is not defined
  const value = 10;
  console.log(value); // 10
}

console.log(value); // 5



  

  
  
  
  
  
  
  
  
  
  