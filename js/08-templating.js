/*
 * Властивість innerHTML
 * - Зчитування
 * - видалення
 * - запис
 */

const titleEl = document.querySelector('.title');
// titleEl.textContent = 'Це <span>заголовок</span>'
// console.log(titleEl.textContent);
titleEl.innerHTML = `Це <span>заголовок</span>`;
console.log(titleEl.innerHTML);

/*
 * Вставка розмітки з insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */
const articleRef = `<article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p product__pridct>Ціна: 1111 кредитів</p>
</article>`;

const containerRef = document.querySelector('.js-container')
containerRef.insertAdjacentHTML('beforeend', articleRef)

{/* <article class="product">
  <h2 class="product__name">Назва</h2>
  <p class="product__descr">Опис</p>
  <p product__pridct>Ціна: 1111 кредитів</p>
</article> */}

// const containerEl = document.querySelector('.js-container');

// containerEl.insertAdjacentHTML(
//     'beforeend', 
// `<article class="product">
// <h2 class="product__name">Назва</h2>
// <p class="product__descr">Опис</p>
// <p product__pridct>Ціна: 1111 кредитів</p>
// </article>`
// // )