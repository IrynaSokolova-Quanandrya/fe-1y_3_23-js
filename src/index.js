const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]') 

formRef.addEventListener('submit', onSearch)
loadMoreBtnRef.addEventListener('click', onLoadMore)

const BASE_URL = 'https://newsapi.org/v2/everything/';
const API_KEY = '3ce63eea477043d7a470d2b21dc5ab4b';

const options = {
    headers: {
        'Authorization': API_KEY
    }
}

let page = 1;
let searchQuery;

const searchArticles = query => {
    return fetch(`${BASE_URL}?q=${query}&pageSize=20&page=${page}`, options)
        .then(response => response.json())    
}
function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget;    
    searchQuery = form.elements.query.value;

    searchArticles(searchQuery)
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup) 
        page += 1;    
    })
    form.reset()
}

function onLoadMore() {
    searchArticles(searchQuery)
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup) 
         page += 1;
    })
}  

function createArticleCards(articles) {
    return articles.map(article => {
        return `
        <li>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${article.urlToImage}" alt="" width="480">
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}</p>
                <p>${article.description}</p>
            </article>
            </a>
        </li>
        `
    })
}