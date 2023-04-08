import React from 'react';
import ReactDOM from 'react-dom/client';

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
  switchPage(switchPage(cart));

}

function switchPage(div) {
  let main = document.getElementById("main");
  let old = main;
  let newPage = document.createElement("image"); //for testing
  newPage.src = div.image;

  main.innerHTML = newPage;
  return old;
}

function createCheckout(cart) {
  return <div>
        <div class="container">
      <main>
        <div class="py-5 text-center"></div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Your cart</span>
              <span class="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-body-secondary">Brief description</small>
                </div>
                <span class="text-body-secondary">$5</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-body-tertiary"
              >
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Payment Information</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label"
                    >Email
                    <span class="text-body-secondary">(Optional)</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address2" class="form-label"
                    >Address 2
                    <span class="text-body-secondary">(Optional)</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div class="col-md-5">
                  <label for="country" class="form-label">Country</label>
                  <select class="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div class="col-md-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>

                <div class="col-lg-12">
                  <label for="cc-number" class="form-label"
                    >Credit card number</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
}