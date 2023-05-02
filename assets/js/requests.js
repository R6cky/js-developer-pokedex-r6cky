import { Pokemon } from "./pokemon-model.js";
export const pokeApi = {};

const arr = [1, 2, 4];

// const convertPokeApiDetailToPokemon = (pokeDetail) => {
//   const pokemon = new Pokemon();
//   pokemon.number = pokeDetail.number;
//   pokemon.name = pokeDetail.name;
//   const types = (pokemon.types = pokeDetail.types.map(
//     (typeSlot) => typeSlot.type.name
//   ));
//   const [type] = pokemon.types;
//   pokemon.type = type;
//   pokemon.image = pokeDetail.sprites.other.dream_world.front_default;

//   return pokemon;
// };

pokeApi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url).then((res) => res.json());
};

pokeApi.getpokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((res) => res.json())
    .then((resJson) => resJson.results)
    .then((listPokemons) =>
      listPokemons.map((elem) => pokeApi.getPokemonsDetail(elem))
    )
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonDetail) => pokemonDetail)
    .catch((err) => console.log(err));
};
