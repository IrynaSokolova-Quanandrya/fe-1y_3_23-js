/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та ЗМІНЮЄ оригінальний масив
 * - За замовчуванням:
 *    - Сортує за зростанням 
 *    - приводить елементи в рядок і сортує по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.reverse()
// numbers.sort()
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
const copyLetters = [...letters];

console.log(letters === copyLetters);



// letters.sort()
// console.log('letters', letters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються у відповідності до її значення, що повертається
 *  - якщо compareFunction(A, B) менше 0, сортування поставить B перед A
 *  - якщо compareFunction(A, B) більше 0, сортування поставить A перед B
 *  - якщо compareFunction(A, B) поверне 0, сортування залишить A та B не зміненими по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.
 */
const numbers = [1, 9, 6, 20, 3];
letters.sort((curEl, nextEl) => {
    // console.log('curEl: ',curEl);
    // console.log('nextEl: ',nextEl);
    // console.log(curEl > nextEl);
   return curEl > nextEl
});

// console.log(letters);
/*
 * Як зробити копію масиву щоб не змінювати (не сортувати) оригінальний
 * - Array.prototype.slice()
 * - Операція spread
 */


// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Сортування складних типів
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По часу гри

// console.table(sortedByBestPlayers);





const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
// console.table(sortedByWorstPlayers);

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

// console.table(byName);

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);