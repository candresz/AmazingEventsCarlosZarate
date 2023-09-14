const cardsData = data.events;
const cardsContainerId = document.getElementById("cardsCont");
const objectDate = parseInt(data.currentDate.split("-").join("")); // Metodos

// Template
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
        <a class="text-decoration-none btn btn-outline-info" href="../pages/details.html?parametro=${data._id}"
          >Details</a
        >
      </p>
    </div>
    </div>`;
}

/////////////
function printingCards(array, container) {
  console.log(array);
  if (array.length > 0) {
    let template = "";
    for (const iterator of array) {
      let dateToNumber = parseInt(iterator.date.split("-").join(""));

      if (dateToNumber < objectDate) {
        template += cardTemplate(iterator);
      }
    }
    container.innerHTML = template;
  } else {
    container.innerHTML = `<h2 class="txt404">-- The requested event could not be found!</h2>`;
  }
}
printingCards(cardsData, cardsContainerId);
