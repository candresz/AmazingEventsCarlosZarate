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
    const usersData = data;
    const usersEvents = data.events;
    const objectDate = parseInt(usersData.currentDate.split("-").join(""));
    fn.printingCardsUpComing(usersEvents, cardsContainer, objectDate); // Printing cards

    const upComingEventsRdy = fn.gettingUpcomingEvents(usersEvents, objectDate);

    // Checkboxes

    const checkBoxesFilter = fn.filteringCheckBoxes(upComingEventsRdy);
    const checkBoxesTemplate = fn.checkBox;
    fn.printCheckBox(checkBoxesFilter, checkBoxesTemplate, containerCheckBoxes); // Printing checkboxes

    // Checkboxes and SearchBar
    const joiningFns = fn.joiningFilters;
    containerCheckBoxes.addEventListener("change", () => {
      const returnArrayFilters = joiningFns(
        usersEvents,
        searchBar,
        fn.filterCheck,
        fn.filterSearch
      );
      fn.printingCardsUpComing(returnArrayFilters, cardsContainer, objectDate);
    });
    searchBtn.addEventListener("click", () => {
      const returnArrayFilters = joiningFns(
        usersEvents,
        searchBar,
        fn.filterCheck,
        fn.filterSearch
      );
      fn.printingCardsUpComing(returnArrayFilters, cardsContainer, objectDate);
    });
  })
  .catch((error) => {
    error;
  });
