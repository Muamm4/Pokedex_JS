const listPokemon = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const loader = document.querySelector('.loader');
const searchInput = document.getElementById('searchInput');
async function loadPokemons(offset, limit) {
   loader.classList.remove('show');
   for (let i = offset; i < offset + limit; i++) {
      await Pokemon.getPokemon(i + 1).then((pokemon) => {
         listPokemon.innerHTML += pokemon.html;
      });
   }
   loader.classList.add('hide');

}

setTimeout(() => {
   loadPokemons(0, 151);
}, 1000);

loadMoreButton.addEventListener('click', () => {
   loader.classList.remove('hide');
   let offset = listPokemon.children.length;
   loader.classList.add('show');
   loadPokemons(offset, 10);

})

searchInput.addEventListener('input', () => {
   let filter = searchInput.value;
   let pokemonList = document.querySelectorAll('.pokemon');
   pokemonList.forEach((pokemon) => {
      if (pokemon.innerText.toLowerCase().includes(filter.toLowerCase())) {
         pokemon.classList.remove('hide');
      } else {
         pokemon.classList.add('hide');
      }
   })
})
