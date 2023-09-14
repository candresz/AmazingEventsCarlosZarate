//importing the data
const cardsData = data.events;

//Create the template
function cardTemplate(data) {
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
          </div> `;
}

//creating the cards
function createCards(cardList) {
  //starting with empty string
  let template = ""; // Acumulando
  //creating key value pairs for iterator and cardlist
  for (const iterator of cardList) {
    //adding the template to the card
    template += cardTemplate(iterator);
  }
  return template;
}
// Adding the template to the html
function printCards(template, id) {
  //select the area you want to print the card
  let contenedor = document.getElementById(id);
  //display the templates on the card
  contenedor.innerHTML = template;
}

//Adding the card data to the template; template is then used in the printCards to be added to the card
const template = createCards(cardsData);

printCards(template, "cardsCont");
