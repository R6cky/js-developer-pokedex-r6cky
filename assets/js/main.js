import { pokeApi } from "./requests.js";

const refHtml = document.querySelector(".pokemon-ul");

const renderListPokemonTypes = (pokemonTypes) => {
  return pokemonTypes.map(
    (typeSlot) => `<li class="pokemon-type">${typeSlot.type.name}</li>`
  );
};

const renderpokemons = (pokemon) => {
  return `
        <li class="pokemon-li ${pokemon.types[0].type.name}">
                <div class="pokemon-number">
                    <p>#${pokemon.order}</p>
                </div>
                <div class="pokemon-name">
                    <h4>${pokemon.name}</h4>
                </div>
                <div class="pokemon-detail">
                    <ul>
                    ${renderListPokemonTypes(pokemon.types).join("")}
                    </ul>
                    <div class="pokemon-img">
                    <img src="${
                      pokemon.sprites.other.dream_world.front_default
                    }" alt="img" />
                    </div>
                </div>
        </li>

    `;
};

pokeApi
  .getpokemons()
  .then((pokemons) => {
    const itemList = pokemons.map((elem) => renderpokemons(elem));
    refHtml.innerHTML += itemList.join("");
  })
  .catch((err) => console.log(err));
