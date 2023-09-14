import * as fn from "../modules/fn.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dataEvents = data.events;
    const dataObject = data;
    const containerTd = document.getElementById("trEvents");
    const containerTrSecondTable = document.getElementById("trSecondTable");
    const containerTrThirdTable = document.getElementById("trThirdTable");
    const objectDate = parseInt(dataObject.currentDate.split("-").join(""));
    const fnPastEv = fn.gettingPastEvents(dataEvents, objectDate); // Eventos pasados

    //Hg assistance
    let maxAssistanceEvent = null; // Objeto guardado
    let maxAssistance = 0;

    for (const iterator of fnPastEv) {
      if (iterator.assistance > maxAssistance) {
        maxAssistance = iterator.assistance;
        maxAssistanceEvent = iterator;
      }
    }

    // Lowest assistance
    let lowAssistanceEvent = null; // Objeto guardado
    let lowAssistance = 9999999;

    for (const iterator of fnPastEv) {
      if (iterator.assistance < lowAssistance) {
        lowAssistance = iterator.assistance;
        lowAssistanceEvent = iterator;
      }
    }

    // Capacity
    let maxCapacityEvent = null; // Objeto guardado
    let maxCapacity = 0;

    for (const iterator of dataEvents) {
      if (iterator.capacity > maxCapacity) {
        maxCapacity = iterator.capacity;
        maxCapacityEvent = iterator;
      }
    }

    // Llama a la función templateTr para generar HTML
    templateTr(
      maxAssistanceEvent,
      lowAssistanceEvent,
      maxCapacityEvent,
      containerTd
    );

    const pastEvents = fn.gettingPastEvents(dataEvents, objectDate); // Past Events
    const upcomingEvents = fn.gettingUpcomingEvents(dataEvents, objectDate); // Upcoming events
    const filteringCategoriesForUpcoming =
      fn.filteringCheckBoxes(upcomingEvents);
    const categoriesGroup = fn.filteringCheckBoxes(dataEvents); // Array con sus categorias
    const arrayWithCategories = fn.exportingEvCategories(
      ////// Array reunido por categorias y sus eventos
      upcomingEvents,
      filteringCategoriesForUpcoming
    );
    const arrayWithCategoriesPastEvents = fn.exportingEvCategories(
      ////// Array reunido por categorias y sus eventos
      pastEvents,
      categoriesGroup
    );

    printingSecondTable(arrayWithCategories, containerTrSecondTable);
    printingThirdTable(arrayWithCategoriesPastEvents, containerTrThirdTable);
  });

// First table
function templateTr(objeto1, objeto2, objeto3, container) {
  container.innerHTML = `<td class="cell">Event: ${
    objeto1.name
  }</p><p>Percentage: ${fn.formulaPercentage(
    objeto1.assistance,
    objeto1.capacity
  )}%</p></td>
  <td class="cell">Event: ${
    objeto2.name
  }</p><p>Percentage: ${fn.formulaPercentage(
    objeto2.assistance,
    objeto2.capacity
  )}%</p></td>
  <td class="cell">Event: ${objeto1.name}</p><p>Capacity: ${
    objeto3.capacity
  }</p></td>`;
}

// Second Table
function secondTableTemplate(array) {
  return `<tr>
    <td>${array.category}</td> 
    <td>$ ${fn.revenues(array.events)}</td>
    <td>${fn.attendance(array.events)} %</td>
    </tr>`;
}

function printingSecondTable(array, container) {
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      template += secondTableTemplate(iterator);
    }
    container.innerHTML += template;
  } else {
    container.innerHTML += `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}
function thirdTableTemplate(array) {
  return `<tr>
    <td>${array.category}</td> 
    <td>$ ${fn.revenues(array.events)}</td>
    <td>${fn.attendance(array.events)} %</td>
    </tr>`;
}

function printingThirdTable(array, container) {
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      template += thirdTableTemplate(iterator);
    }
    container.innerHTML += template;
  } else {
    container.innerHTML += `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}
