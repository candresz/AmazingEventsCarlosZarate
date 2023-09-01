const cardsData = data.events;
const objectDate = parseInt(data.currentDate.split("-").join(""));

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

//creating and filtering the cards
function createCards(cardList) {
  //starting with empty string
  let template = "";
  //creating key value pairs for iterator and cardlist
  for (const iterator of cardList) {
    let dateToNumber = parseInt(iterator.date.split("-").join(""));
    console.log(dateToNumber);
    if (dateToNumber < objectDate) {
      template += cardsTemplate(iterator);
    }
  }
  return template;
}

// Adding the template to the html
function printCards(template, id) {
  //select the area you want to print the card
  let container = document.getElementById(id);
  //display the templates on the card
  container.innerHTML = template;
}

const generateCards = createCards(cardsData);

printCards(generateCards, "cardsCont");
