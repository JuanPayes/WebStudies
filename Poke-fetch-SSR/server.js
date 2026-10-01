const express = require('express');
const fetch = require('node-fetch');
const app = express();

let pokemonList = [];

//Pug is now our templates engine
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {pokemonList: pokemonList || [], error: null});
});

app.get('/pokemon', async(req, res) => {
  const pokename = req.query.name;
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename.toLowerCase()}`);
    
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const pokemon = await response.json();

    pokemonList.push({
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      dexNumber: pokemon.id,
      types: pokemon.types.map(type => type.type.name).join(', ')
    });

    res.render('index', {pokemonList, error:null});

    res.redirect('/');
  }catch(error){
    console.error('Error al obtener el Pokémon:', error);
    res.render('index', { pokemonList: null, error: 'Pokemon no encontrado'})
  }
});

app.get('/delete', (req, res)=>{
  const pokename = req.query.name;

  pokemonList = pokemonList.filter(pokemon => pokemon.name != pokename);

  res.render('index', {pokemonList: pokemonList || [], error: null});

  res.redirect('/');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
