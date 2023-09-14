import * as fn from "../modules/fn.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let containerCards = document.getElementById("details");
    let users = data.events;
    console.log(users);

    let parametro = location.search;

    let searchPa = new URLSearchParams(parametro);

    let idEvent = searchPa.get("parametro");
    let idEventNumber = parseInt(idEvent, 10);

    let event = users.find((events) => {
      return events._id === idEventNumber;
    });

    fn.templateDetails(containerCards, event);
  })
  .catch((error) => {
    console.log(error);
  });
