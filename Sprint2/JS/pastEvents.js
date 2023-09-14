const cardsData = data.events;
const objectDate = parseInt(data.currentDate.split("-").join("")); // Metodos

// Template
function cardsTemplate(data) {
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
        <a class="text-decoration-none btn btn-outline-info" href="#"
          >Details</a
        >
      </p>
    </div>
    </div>`;
}

function createCards(cardList) {
  let template = "";

  for (const iterator of cardList) {
    let dateToNumber = parseInt(iterator.date.split("-").join(""));

    if (dateToNumber < objectDate) {
      template += cardsTemplate(iterator);
    }
  }
  return template;
}

function printCards(template, id) {
  let container = document.getElementById(id);

  container.innerHTML = template;
}

const generateCards = createCards(cardsData);

printCards(generateCards, "cardsCont");
