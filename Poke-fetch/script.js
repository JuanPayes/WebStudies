
/* async function getPokemonData(pokeName) {
  try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
    
   
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const pokemonData = await response.json();

    console.log(`Nombre: ${pokemonData.name}`);
    console.log(`ID: ${pokemonData.id}`);
    console.log(`Tipos: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}`);
        
    return pokemonData;

  } catch(error){
    console.error('Error al obtener el pokemon', error);
  }
}
getPokemonData('Snorlax');
getPokemonData('Tyranitar');
getPokemonData('Gengar');
getPokemonData('Garchomp');
getPokemonData('Infernape');
getPokemonData('Gyarados');  */

const findButton = document.getElementById('find');
const nameInput = document.getElementById('name');
const pokemonsContainer = document.querySelector('.pokemons');

async function getPokemonData(pokename) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename.toLowerCase()}`);

    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const pokemonData = await response.json();

    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon-entry');

    const pokemonImageDiv = document.createElement('div');
    pokemonImageDiv.classList.add('pokemon-image');
    pokemonImageDiv.innerHTML = `<img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">`;

    const pokemonInfoDiv = document.createElement('div');
    pokemonInfoDiv.classList.add('pokemon-info');
    pokemonInfoDiv.innerHTML = `
      <p>ID: ${pokemonData.id}</p>
      <p>Name: ${pokemonData.name}</p>
      <p>Type: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <button class="delete-btn"><i class="fas fa-trash"></i> Borrar</button>`;

    pokemonDiv.appendChild(pokemonImageDiv);
    pokemonDiv.appendChild(pokemonInfoDiv);

    pokemonsContainer.appendChild(pokemonDiv);

    const deleteButton = pokemonInfoDiv.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
      pokemonDiv.remove(); 
      console.log(`${pokemonData.name} ha sido eliminado`);
    });

  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
}

findButton.addEventListener('click', () => {
  const pokename = nameInput.value;
  if (pokename) {
    getPokemonData(pokename);
  } else {
    alert('Por favor, ingresa el nombre de un Pokémon');
  }
});





