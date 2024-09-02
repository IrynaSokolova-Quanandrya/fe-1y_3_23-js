/*
 * - Пагінація
 *   - сторінка і кількість на сторінці
 * - Завантажуємо статті при сабміті на форму
 * - Завантажуємо статті при на натисканні на кнопку «Завантажити ще»
 * - Оновлюємо сторінку в параметрах запиту
 * - Малюємо статті
 * - Ресет значення під час нового пошуку  
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */
import { NewsApi } from "./api-service";

const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');

formRef.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

const newsApiService = new NewsApi();
console.log(newsApiService);
fetch('https://api.pexels.com/v1/')
.then(r=>r.json())
.then(console.log)
function onSearchForm(event) {
    event.preventDefault();

    const form = event.currentTarget;  
    newsApiService.searchQuery = form.elements.query.value;
    newsApiService.resetPage()
    form.elements.query.value = '';
    newsApiService.fetchArticles() 
    .then(createMarkup)
  }
  
  function onLoadMoreClick() {
    newsApiService.fetchArticles() 
    .then(createMarkup)
  
  }


  function createMarkup(articles) {  
        const markup = articlesTpl(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
    }


















// import NewsApi from './news-api';
// import articlesTpl from './templates/articles.hbs'

// const formRef = document.querySelector('.js-search-form');
// const articlesContainerRef = document.querySelector('.js-articles-container');
// const loadMoreBtn = document.querySelector('[data-action="load-more"]');

// formRef.addEventListener('submit', onSearchForm);
// loadMoreBtn.addEventListener('click', onLoadMoreClick);

// const newsApiService = new NewsApi();

// function onSearchForm(event) {
//   event.preventDefault();
//   const form = event.currentTarget;

//   articlesContainerRef.innerHTML = '';
//   newsApiService.resetPage()
//   newsApiService.searchQuery = form.elements.query.value;

//   newsApiService.fetchArticles() 
//   .then(createMarkup)
// }

// function onLoadMoreClick() {
//   newsApiService.increasePage();
//   console.log(newsApiService);
  
//   newsApiService.fetchArticles()
//   .then(createMarkup);

// }

// function createMarkup(articles) {  
//     const markup = articlesTpl(articles)
//     articlesContainerRef.insertAdjacentHTML('beforeend', markup)  
// }


// function fetchArticles() {
//     const url = `https://newsapi.org/v2/everything?q=${searchQuery}`
//     const options = {
//         headers: {
//             'X-Api-Key': '3ce63eea477043d7a470d2b21dc5ab4b',
//         }        
//     }
//     return fetch(url, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         return articles;
//       });
//   }
//   fetchArticles();

// import articlesTpl from './templates/articles.hbs';
// import './css/common.css';
// import NewsApiService from './js/news-service';
// import LoadMoreBtn from './js/components/load-more-btn';

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   articlesContainer: document.querySelector('.js-articles-container'),
// };
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     return alert('Введи что-то нормальное');
//   }

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = '';
// }



 //============================================
//  ==NEWS-API==
// const API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b';
// const BASE_URL = 'http://newsapi.org/v2/'

// export default class NewsApi  {
//     constructor (){
//         this.searchQuery = '',
//         this.page = 1
//     }    
     
//     fetchArticles(){
//        return fetch(`${BASE_URL}everything?q=${this.searchQuery}
//                 &language=en&pageSize=5&page=${this.page}&apiKey=${API_KEY}`)
//         .then(response=>response.json())
//         .then(data=>data.articles)
//         .then(articles=> articles)
//             }

//     increasePage(){
//         this.page += 1
//     }

//     resetPage(){
//         this.page = 1
//     }
// }
 
 
 
 
 
 

 
 
 
 
 
 
 

 
