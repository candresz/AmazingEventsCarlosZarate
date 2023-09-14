let parametro = location.search;

let searchPa = new URLSearchParams(parametro);

let idEvent = searchPa.get("parametro");
console.log(typeof idEvent);

let event = data.events.find((events) => events._id === idEvent);
console.log(event);

let containerCards = document.getElementById("details");

function templateCards(element, dataEvents) {
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
  ${dataEvents.assistance ? `<p>Assistance: ${dataEvents.assistance}</p>` : ""}
  ${dataEvents.estimate ? `<p>Estimate: ${dataEvents.estimate}</p>` : ""}
  <p>Price: $${dataEvents.price}</p>
</div>`;
}

templateCards(containerCards, event);
