export * from "./fn.js";

//Create the template
export function cardTemplate(data) {
  return `<div class="card p-1" style="width: 18rem">
          <img
            src="${data.image}"
            class="card-img-top cardshg"
            alt="Food Fair Picture"
          />
          <div class="card-body texthg">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">
             ${data.description}
            </p>
          </div>
          <div class="card-body d-flex justify-content-between">
            <p>$${data.price}</p>
            <p>
              <a class="text-decoration-none btn btn-outline-info" href="../pages/details.html?parametro=${data._id}"
                >Details</a
              >
            </p>
          </div>
          </div> `;
}

// Printing cards Main
export function printingCardsMain(array, container) {
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      template += cardTemplate(iterator);
    }
    container.innerHTML = template;
  } else {
    container.innerHTML = `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}

// Getting past events
export function gettingPastEvents(array, dateData) {
  let pastEvents = [];
  if (array.length > 0) {
    for (const iterator of array) {
      let dateToNumber = parseInt(iterator.date.split("-").join(""));

      if (dateToNumber < dateData) {
        pastEvents.push(iterator);
      }
    }
  }
  return pastEvents;
}

// Getting upcoming events
export function gettingUpcomingEvents(array, dateData) {
  let upComingEvents = [];
  if (array.length > 0) {
    for (const iterator of array) {
      let dateToNumber = parseInt(iterator.date.split("-").join(""));

      if (dateToNumber > dateData) {
        upComingEvents.push(iterator);
      }
    }
  }
  return upComingEvents;
}

// Formula percentage
export function formulaPercentage(assistance, capacity) {
  const result = (assistance / capacity) * 100;
  return result.toFixed();
}

///////////// Printing Cards Past Events

export function printingCardsPast(array, container, dateData) {
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      let dateToNumber = parseInt(iterator.date.split("-").join(""));

      if (dateToNumber < dateData) {
        template += cardTemplate(iterator);
      }
    }
    container.innerHTML = template;
  } else {
    container.innerHTML = `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}

// Printing Cards Upcoming
export function printingCardsUpComing(array, container, dateData) {
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      let dateToNumber = parseInt(iterator.date.split("-").join(""));
      if (dateToNumber > dateData) {
        template += cardTemplate(iterator);
      }
    }

    container.innerHTML = template;
  } else {
    container.innerHTML = `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}

export function exportingEvCategories(arrayEvents, categories) {
  const categorizedEvents = categories.reduce((result, category) => {
    // Filtra los eventos que pertenecen a la categoría actual
    const eventsInCategory = arrayEvents.filter(
      (event) => event.category === category
    );

    // Agrega la categoría y los eventos correspondientes al resultado
    result.push({
      category: category,
      events: eventsInCategory,
    });

    return result;
  }, []);

  return categorizedEvents;
}

// Function getting category name
export function categoriesFil(array) {
  const categoryName = array[0].category;
  return categoryName;
}

// Function revenues
export function revenues(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let formula = array[i].assistance || array[i].estimate * array[i].price;
    total += formula;
  }
  return total;
}

// Function attendance
export function attendance(asEs) {
  let totalAsiEst = 0;
  let totalCap = 0;

  for (let i = 0; i < asEs.length; i++) {
    totalAsiEst += asEs[i].assistance || asEs[i].estimate;
    totalCap += asEs[i].capacity;
  }

  return ((totalAsiEst / totalCap) * 100).toFixed();
}

// Function filtering checkboxes categories
export function filteringCheckBoxes(array) {
  // Empty array for checkboxes
  const categories = [];
  // // Filtering categories
  for (const iterator of array) {
    const keyCategory = iterator.category;
    if (!categories.includes(keyCategory)) {
      categories.push(keyCategory);
    }
  }
  return categories;
}

// Checkboxes template
export function checkBox(categ) {
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

export function printCheckBox(array, template, container) {
  const templateVariable = template(array);
  container.innerHTML = templateVariable;
}

// Function for Checkboxes
export function filterCheck(array) {
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
export function filterSearch(array, searchText) {
  const searchFilter = array.filter((objeto) =>
    objeto.name.includes(searchText.value)
  );
  return searchFilter;
}

/////////

// Joining filters
export function joiningFilters(array, valueSearchBar, fnCheckBoxes, fnSearch) {
  // Im including the function for checkboxes and searchbar
  const arrayCheckFilter = fnCheckBoxes(array);
  const arraySearchFilter = fnSearch(arrayCheckFilter, valueSearchBar);
  return arraySearchFilter;
}

// Details
export function templateDetails(element, dataEvents) {
  element.innerHTML += `<div class="border1">
    <img
      class="picturedetails1"
      src="${dataEvents.image}"
      alt="Costume picture"
    />
  </div>
  <div class="containerinfo border1">
    <h3>${dataEvents.name}</h3>
    <p>${dataEvents.description}</p>
    <p>Date: ${dataEvents.date}</p>
    <p>Category: ${dataEvents.category}</p>
    <p>Place: ${dataEvents.place}</p>
    <p>Capacity: ${dataEvents.capacity}</p>
    ${
      dataEvents.assistance ? `<p>Assistance: ${dataEvents.assistance}</p>` : ""
    }
    ${dataEvents.estimate ? `<p>Estimate: ${dataEvents.estimate}</p>` : ""}
    <p>Price: $${dataEvents.price}</p>
  </div>`;
}
