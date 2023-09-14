import * as fn from "../modules/fn.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const cardsContainer = document.getElementById("cardsCont");
    const containerCheckBoxes = document.getElementById("checkBox");
    const searchBar = document.getElementById("searchBar");
    const searchBtn = document.getElementById("searchBtn");
    let users = data.events;
    fn.printingCardsMain(users, cardsContainer);

    // Checkboxes
    const checkBoxesFilter = fn.filteringCheckBoxes(users);
    const checkBoxesTemplate = fn.checkBox;
    fn.printCheckBox(checkBoxesFilter, checkBoxesTemplate, containerCheckBoxes);
    // Checkboxes and SearchBar
    const joiningFns = fn.joiningFilters;
    containerCheckBoxes.addEventListener("change", () => {
      const returnArrayFilters = joiningFns(
        users,
        searchBar,
        fn.filterCheck,
        fn.filterSearch
      );
      fn.printingCardsMain(returnArrayFilters, cardsContainer);
    });
    searchBtn.addEventListener("click", () => {
      const returnArrayFilters = joiningFns(
        users,
        searchBar,
        fn.filterCheck,
        fn.filterSearch
      );
      fn.printingCardsMain(returnArrayFilters, cardsContainer);
    });
  })
  .catch((error) => {
    error;
  });
