class Pokemon {
   id;
   number;
   name;
   type;
   types = [];
   photo;
   html;
   constructor(_id) {
   }
   static async getPokemon(id) {
      let pokemonOut = new Pokemon();

      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
         .then((response) => response.json())
         .then((pokemon) => {
            pokemonOut.id = pokemon.id;
            pokemonOut.number = pokemon.id.toString().padStart(3, '0');
            pokemonOut.name = pokemon.name;
            pokemon.types.forEach(element => {
               pokemonOut.types.push(element.type.name);
            });
            pokemonOut.photo = pokemon.sprites.other.dream_world.front_default;
         });

      var html = `
      <div data-id="${pokemonOut.id}" class="pokemon">
      <div class="pokemonSub ${pokemonOut.types[0]}">
      <div class="pokebola">
      <span class="number">${pokemonOut.number}</span>
      <span class="name">${pokemonOut.name}</span>

      <div class="detail">
        <ol class="types">`;
      pokemonOut.types.forEach(element => {
         html += `<li class="type ${element.toString().toLowerCase()}">${element.toString().toUpperCase()}</li>`;
      });
      html += `
        </ol >

         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonOut.id}.png" alt="${pokemonOut.name}" />
      
         </li >
      </div >
      </div>
    </div >
         `;
      pokemonOut.html = html;
      return pokemonOut;
   }


}
