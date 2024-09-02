const BASE_URL = 'https://newsapi.org/v2/'
const options = {
  headers:{
    'X-Api-Key': '3ce63eea477043d7a470d2b21dc5ab4b'
  }
}
export class NewsApi {
    constructor(){
        this.searchQuery = '',
        this.page = 1
    }    

    fetchArticles() {
        return fetch(`${BASE_URL}everything?q=${this.searchQuery}&pageSize=10&page=${this.page}`, options)
        .then(response=>response.json())
        .then(articles =>{
            this.increasePage()
            return articles
        })
    }

    increasePage(){
        this.page += 1
    }

    resetPage(){
        this.page = 1
    }
}
