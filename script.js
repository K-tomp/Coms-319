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
    div8.className = "d-flex justify-content-between align-items-end";

    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    let Price = document.createElement("small");
    Price.className = "text-muted";
    Price.innerHTML = `${card.price} `;

    let qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.className = "form-control form-control-light text-bg-light";
    qtyInput.value = "0";

    let plusButton = document.createElement("button");
    plusButton.className = "btn btn-sm btn-outline-secondary";
    plusButton.type = "button";
    plusButton.innerText = "+";
    plusButton.addEventListener("click", function () {
      qtyInput.value++;
    });

    let minusButton = document.createElement("button");
    minusButton.className = "btn btn-sm btn-outline-secondary";
    minusButton.type = "button";
    minusButton.innerText = "-";
    minusButton.addEventListener("click", function () {
      if (qtyInput.value > 0) {
        qtyInput.value--;
      }
    });

    btnGroup.appendChild(qtyInput);
    btnGroup.appendChild(plusButton);
    btnGroup.appendChild(minusButton);

    div8.appendChild(btnGroup);

    div8.appendChild(Price);
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
    //var productInfo = data;
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

window.onload = init;

function init() {
  let btnCheckOut = document.getElementById("checkOut");
  if (btnCheckOut != null) {
    btnCheckOut.addEventListener("click", checkOut);
  } else {
    console.error("no button found");
  }
}

function checkOut() {
  console.log("Checking out...");
  let qtyInputs = document.getElementsByClassName("form-control form-control-light text-bg-light");
  let prodImages = document.getElementsByClassName("bd-placeholder-img card-img-top");
  let prodPrices = document.getElementsByClassName("text-muted");
  let prodNames = document.getElementsByTagName("strong");
  var homePage = document.getElementById("main");
  var cart = [];

  //create shopping cart
  for (let i = 0; i < qtyInputs.length; i++) {
    if (qtyInputs[i].value > 0) {
      let item = {name:`${prodNames[i].innerText}`, image:`${prodImages[i].src}`, price:`${prodPrices[i].innerText}`, quantity:`${qtyInputs[i].value}`};
      cart.push(item);
    }
  }

  let current = qtyInputs[0].parentElement.parentElement; //div8
  switchPage(cart[0]);

}

function switchPage(div) {
  let main = document.getElementById("main");
  let old = main;
  let newPage = document.createElement("image"); //for testing
  newPage.src = div.image;

  main.innerHTML = newPage;
  return old;
}