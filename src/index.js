import React, { createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import "./headers.css";
import "./script.js";
import { products } from "./products";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import pic1 from "./images/DiningTable4.jpg";
import pic2 from "./images/DiningTable5.jpg";
import pic3 from "./images/DiningTable6.jpg";
import pic4 from "./images/Sofa1.jpg";
import pic5 from "./images/Sofa2.jpg";
import pic6 from "./images/Sofa3.jpg";
import pic7 from "./images/DiningTable.jpg";
import pic8 from "./images/DiningTable2.jpg";
import pic9 from "./images/DiningTable3.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
//<img src={table} />
const main = createRef();
//<img src={DiningTable4jpg}></img>

root.render(
  <div>
    <script src="script.js"></script>
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 fw-bold text-white">
                C&D's Furniture
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-light"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-warning" id="checkOut">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </header>
    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

    <script src="checkout.js"></script>

    <main>
      <div id="main">
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Caleb & David's Furniture</h1>
              <p class="lead text-body-secondary">
                Welcome to our new and improved website!
                <br />
                Now including a search bar and shopping cart!
              </p>
              <p>
                <a href="#" class="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <div class="album py-5 bg-light cardBackground">
          <div class="container">
            <div
              id="container"
              class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
              ref={main}
            >
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic1}></img>

                  <div class="card-body">
                    <strong>{products[0].productName}</strong>
                    <p class="card-text">{products[0].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[0].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic2}></img>

                  <div class="card-body">
                  <strong>{products[1].productName}</strong>

                    <p class="card-text">{products[1].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[1].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic3}></img>

                  <div class="card-body">
                  <strong>{products[2].productName}</strong>

                    <p class="card-text">{products[2].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[2].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic4}></img>

                  <div class="card-body">
                  <strong>{products[3].productName}</strong>

                    <p class="card-text">{products[3].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[3].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic5}></img>

                  <div class="card-body">
                  <strong>{products[4].productName}</strong>

                    <p class="card-text">{products[4].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[4].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic6}></img>

                  <div class="card-body">
                  <strong>{products[5].productName}</strong>

                    <p class="card-text">{products[5].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[5].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic7}></img>

                  <div class="card-body">
                  <strong>{products[6].productName}</strong>

                    <p class="card-text">{products[6].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[6].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic8}></img>

                  <div class="card-body">
                  <strong>{products[7].productName}</strong>

                    <p class="card-text">{products[7].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[7].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={pic9}></img>

                  <div class="card-body">
                  <strong>{products[8].productName}</strong>

                    <p class="card-text">{products[8].text}</p>
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="btn-group">
                        <input
                          type="number"
                          value="0"
                          class="form-control form-control-light text-bg-light"
                        />
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          -
                        </button>
                      </div>
                      <small class="text-body-emphasis">
                        {products[8].price}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-body-secondary py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p class="mb-1">
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </p>
        <p class="mb-0">
          New to Bootstrap? <a href="/">Visit the homepage</a> or read our
          <a href="../getting-started/introduction/">getting started guide</a>.
        </p>
      </div>
    </footer>
  </div>
);

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

// let mainContainer = document.getElementById("container");
// mainContainer.appendChild(createCards(data));

function createCards(data) {
  let div = [];
  for (let card of data.products) {
    div.push(
      <div class="col">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <div class="btn-group">
                <input type="number" value="0" class="number" />
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  +
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  -
                </button>
              </div>
              <small class="text-body-emphasis">$19.99</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return div;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
