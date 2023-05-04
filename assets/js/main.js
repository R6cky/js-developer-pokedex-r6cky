import { openModalViewPokemon } from "./modal.js";
import { pokeApi } from "./requests.js";

const refHtml = document.querySelector(".pokemon-ul");
const loadMoreButton = document.querySelector(".load-more");
const limit = 5;
var offset = 0;

const renderListPokemonTypes = (pokemonTypes) => {
  return pokemonTypes.map(
    (typeSlot) => `<li class="pokemon-type">${typeSlot.type.name}</li>`
  );
};

const loadPokemonItens = (offset, limit) => {
  pokeApi.getpokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((elem) => renderpokemons(elem));
    refHtml.innerHTML += newHtml.join("");
    searchPokemons();
    openModalViewPokemon(pokemons);
  });
};

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
});

const searchPokemons = () => {
  const searchInput = document.querySelector(".search-input");
  const pokemonLi = document.querySelectorAll(".pokemon-li");

  searchInput.addEventListener("input", () => {
    if (searchInput.value !== " ") {
      for (let pokemon of pokemonLi) {
        console.log(pokemon);
        let name = pokemon.querySelector(".pokemon-name");
        name = name.textContent.toLowerCase();

        let filterText = searchInput.value.toLowerCase();
        if (!name.includes(filterText)) {
          pokemon.style.display = "none";
        } else {
          pokemon.style.display = "flex";
        }
      }
    } else {
      name.style.display = "flex";
    }
  });
};

const renderpokemons = (pokemon) => {
  return `
        <li class="pokemon-li ${pokemon.types[0].type.name}">
                <div class="pokemon-number">
                    <p>#${pokemon.id}</p>
                </div>
                <div class="pokemon-name">
                    <h4>${pokemon.name}</h4>
                </div>
                <div class="pokemon-detail">
                    <ul>
                    ${renderListPokemonTypes(pokemon.types).join("")}
                    </ul>
                    <div class="pokemon-img">
                    <img class="pokemon-img-img" src="${
                      pokemon.sprites.other.dream_world.front_default
                    }" />
                    </div>
                </div>
                <div class="btn-view-card" id="${pokemon.name}">
                    <img class="btn-view-card-img" src="./assets/img/eyes.png" alt="img" width="30px">
                </div>
        </li>

    `;
};

pokeApi
  .getpokemons()
  .then((pokemons) => {
    const itemList = pokemons.map((elem) => renderpokemons(elem));
    refHtml.innerHTML += itemList.join("");
    searchPokemons();
    openModalViewPokemon(pokemons);
  })
  .catch((err) => console.log(err));
