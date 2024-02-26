/*
 * Array.prototype.flat(depth)
 * - Розгладжує масив до вказаної глибини
 * - За замовчуванням глибина 1
 */

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3));

// Влад - Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
// Федір - знайти вчених прізвище яких починається на літеру С
// Вероніка - Відсортувати вчених по алфавіту
// Ви12:46
// Єлисей - Знайти вчених в яких співпадають перші літери імені і прізвища
// Олег - Знайти рік народження Albert Einstein
// Настя -знайти суму років скільки прожили всі вченні
// Матвій - Відсортувати вчених по кількості прожитих років +
// Марія - Видалити з масива всіх вчених імя яких починається на A
// Єгор - Знайти вченого який народився найпізніше.











/*
 * Array.prototype.flatMap(callback)
 * - Комбінація map + flat
 */

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

const stats = tweets
    .flatMap(tweet => tweet.tags)
    .reduce(
        (acc, tag) => ({
            ...acc,
            [tag]: acc[tag] ? acc[tag] + 1 : 1,
        }),
        {},
    );

// console.log(stats);