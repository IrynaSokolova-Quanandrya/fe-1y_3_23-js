const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-card-container'),
  btn: document.querySelector('.js-search-btn'),
  search: document.querySelector('.js-search')
}
console.log(refs);

refs.btn.addEventListener('click', () => {
  fetchPokemonById(refs.search.value)
    .then(pokemon => {

      const pokemonCard = `<div class="card">
  <div class="card-img-top">
    <img src="" alt="">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я:${pokemon.name}</h2>
    <p class="card-text">Вага: ${pokemon.weight}</p>
    <p class="card-text">Зріст: ${pokemon.height} </p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>   
      <li class="list-group-item"></li>    
    </ul>
  </div>
</div>`
    })
})

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {  
  
  e.preventDefault()
  console.log(e);
  const form = e.currentTarget
 
  const value = form.elements.query.value

  fetchPokemonById(value)
    .then(pokemon => {

      const pokemonCard = `<div class="card">
  <div class="card-img-top">
    <img src="" alt="">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я: </h2>
    <p class="card-text">Вага: </p>
    <p class="card-text">Зріст: </p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>   
      <li class="list-group-item"></li>    
    </ul>
  </div>
</div>`
    })

  e.reset()
}

function fetchPokemonById(pokemonId) {
   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())
} 




    /**
     * <div class="card">
  <div class="card-img-top">
    <img src="" alt="">
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я: </h2>
    <p class="card-text">Вага: </p>
    <p class="card-text">Зріст: </p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>   
      <li class="list-group-item"></li>    
    </ul>
  </div>
</div>
     */