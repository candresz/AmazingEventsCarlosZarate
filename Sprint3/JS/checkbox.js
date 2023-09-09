const dataEvents = data.events;

const container = document.getElementById("checkBox");
const cardsContainer = document.getElementById("cardsCont");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const categories = [];

for (const iterator of dataEvents) {
  const keyCategory = iterator.category;
  if (!categories.includes(keyCategory)) {
    categories.push(keyCategory);
  }
}

function checkBox(categ) {
  let template = "";
  for (let i = 0; i < categ.length; i++) {
    template += `<div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox${[i]}"
      value="${categ[i]}"
    />
    <label class="form-check-label" for="inlineCheckbox${[i]}"
      >${categ[i]}</label
    >
  </div>`;
  }
  return template;
}

function printCheckBox(array, container) {
  const template = checkBox(array);
  container.innerHTML = template;
}

printCheckBox(categories, container);

/// Listener Checkboxes
container.addEventListener("change", () => {
  const returnArrayFilters = joiningFilters(dataEvents, searchBar);
  printingCards(returnArrayFilters, cardsContainer);
});

//Listener SearchBtn
searchBtn.addEventListener("click", () => {
  const returnArrayFilters = joiningFilters(dataEvents, searchBar);
  printingCards(returnArrayFilters, cardsContainer);
});

// Function for Checkboxes
function filterCheck(array) {
  const nodeList = document.querySelectorAll("input[type='checkbox']:checked");
  if (nodeList.length === 0) {
    return array; // Devolver el array original si no hay checkboxes seleccionados
  }
  const checkBoxArray = Array.from(nodeList);
  const valueArray = checkBoxArray.map((input) => input.value);
  const filterArray = array.filter((objeto) =>
    valueArray.includes(objeto.category)
  );

  return filterArray;
}

// Function for Searchbar
function filterSearch(array, searchText) {
  const searchFilter = array.filter((objeto) =>
    objeto.name.includes(searchText.value)
  );
  return searchFilter;
}

/////////

// Joining filters
function joiningFilters(array, valueSearchBar) {
  const arrayCheckFilter = filterCheck(array);
  const arraySearchFilter = filterSearch(arrayCheckFilter, valueSearchBar);
  return arraySearchFilter;
}
