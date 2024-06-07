const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

const techListEl = document.querySelector('.js-list')
console.log(techListEl);

function createListElements(techSkills) {
  const items = techSkills.map((skill) => {
      return `<li>${skill.label}</li>`
  }).join(' ')
  
  return items;
}

const listMarkup = createListElements(tech)
console.log(listMarkup);

techListEl.insertAdjacentHTML('beforeend', listMarkup)

/*
 * 1. Рендеримо размітку елементів списку
 * 2. Прослуховуємо зміни фільтру
 * 3. Фільтруємо дані та рендеримо нові елементи
 */

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   console.log('INPUT');
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }