export const openModalViewPokemon = (pokemons) => {
  const modal = document.querySelector(".modal-view-pokemon");
  const modalActive = document.querySelector("active-modal-view-pokemon");
  const pokemonButton = document.querySelectorAll(".btn-view-card-img");

  pokemonButton.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (!modalActive) {
        modal.classList.add("active-modal-view-pokemon");
        const modalName = document.querySelector(".modal-name-pokemon");
        const modalImg = document.querySelector(".modal-image");
        pokemons.forEach((pokemon) => {
          if (
            pokemon.name.toLowerCase() === elem.parentElement.id.toLowerCase()
          ) {
            modalName.innerText = pokemon.name;
            modalImg.src = pokemon.sprites.other.dream_world.front_default;
          }
        });
      }
    });
  });

  closeModalViewPokemon();
};

const closeModalViewPokemon = () => {
  const modal = document.querySelector(".modal-view-pokemon");
  const btnClosemodal = document.querySelector(".close-modal-view-pokemon");
  btnClosemodal.addEventListener("click", () => {
    if (btnClosemodal) {
      modal.classList.remove("active-modal-view-pokemon");
    }
  });
};
