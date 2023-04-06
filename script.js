let qtyButtons = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
let qtyBoxes = document.getElementsByClassName("number");

for (let i = 0; i < qtyBoxes.length; i++) {
    //plus button
    qtyButtons[i * 2].addEventListener(onclick, function() {
        qtyBoxes[i].value++;
    })
}

function createCards(data) {
    let mainContainer = document.getElementById("container");
    for (let card of data.products) {
      let div2 = document.createElement("div");
      div2.className = "col";
      let div3 = document.createElement("div");
      div3.className = "shadow-sm cardText";
      let div4 = document.createElement("img");
      div4.className = "bd-placeholder-img card-img-top";
      div4.src = `${card.src}`;
      let div5 = document.createElement("div");
      div5.className = "cardBody";
      let div6 = document.createElement("strong");
      div6.innerHTML = `${card.productName}`;
      let div7 = document.createElement("p");
      div7.innerHTML = `${card.text}`;
      let div8 = document.createElement("div");
      div8.className = "d-flex justify-content-between align-items-center";
      let div9 = document.createElement("small");
      div9.className = "text-muted";
      div9.innerHTML = `${card.price} `;
      let div10 = document.createElement("input");
      div10.type = "number";
      div10.className = "form-control form-control-dark text-bg-light";
      div9.appendChild(div10);
      div8.appendChild(div9);
      div5.appendChild(div6);
      div5.appendChild(div7);
      div5.appendChild(div8);
      div3.appendChild(div4);
      div3.appendChild(div5);
      div2.appendChild(div3);
      mainContainer.appendChild(div2);
    }
  }
  
  fetch("products.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      createCards(data);
    })
    .catch(function (err) {
      console.log("error:" + err);
    });

//        <div class="col">
// <div class="card shadow-sm">
// <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
// <div class="card-body">
//   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//   <div class="d-flex justify-content-between align-items-end">
//     <div class="btn-group">
//       <input type="number" value="0" class="number">
//       <button type="button" class="btn btn-sm btn-outline-secondary">+</button>
//       <button type="button" class="btn btn-sm btn-outline-secondary">-</button>
//     </div>
//     <small class="text-body-emphasis">$19.99</small>
    
//   </div>
// </div>
// </div>
// </div>
