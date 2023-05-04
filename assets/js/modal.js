export const openModalViewPokemon = () => {
  const modal = document.querySelector(".modal-view-pokemon");
  const modalActive = document.querySelector("active-modal-view-pokemon");

  if (!modalActive) {
    modal.classList.add("active-modal-view-pokemon");
  }

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
