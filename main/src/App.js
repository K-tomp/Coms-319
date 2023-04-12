import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { products } from "./products";
import "./index.css";
import "./bootstrap.min.css";
import "./headers.css";
//import { CheckOut } from "./index";






//This section prevents an error showing up:
function throttle(f, delay) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), delay);
  }
}

const myResize = new ResizeObserver(throttle((entries) => {
  console.log();
}, 1000));

myResize.observe(document.getElementById('root'));
//end of error prevent



function App() {
  const [showComponent, setShowComponent] = useState('index');
  const [cart,setCart] = useState([]);
  const [cartTotal,setCartTotal] = useState(0);
  const showCheckout = () => {
    setShowComponent('pagesecond');
  };

  const showIndex = () => {
    setShowComponent('index');
  };

  const showConfirmation = () => {
    setShowComponent('confirmation');
  };

  const addProduct = (product) =>{
    setCart([...cart,product]);
    setCartTotal(cartTotal + product.price);
  }

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
    }

  const listItems = products.map((product,index) => (<div key = {index}>
  <div className="col">
                    <div className="card shadow-sm">
                      <img ></img>
  
                      <div className="card-body">
                        <strong>{product.productName}</strong>
                        <p className="card-text">{product.text}</p>
                        <div className="d-flex justify-content-between align-items-end">
                          <div className="btn-group">
                            
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => addProduct(product)}
                            >
                              +
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => removeFromCart(product)}
                            >
                              -
                            </button>
                          </div>
                          <small className="text-body-emphasis">
                            ${product.price}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>


  </div>))

  const Index = () => {
    return (
      <div>
  
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
  
        <div>
          <div id="main" >
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Caleb & David's Furniture</h1>
                  <p className="lead text-body-secondary">
                    Welcome to our new and improved website!
                    <br />
                    Now including a search bar and shopping cart!
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary my-2">
                      Main call to action
                    </a>
                    <a href="#" className="btn btn-secondary my-2">
                      Secondary action
                    </a>
                  </p>
                </div>
              </div>
            </section>
            <div className="album py-5 bg-light cardBackground">
              <div className="container">
                <div
                  id="container"
                  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
                >
                {listItems}
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
  }

  const  Checkout = (props) => {
    return (
      <div>
        <div>
          <div className="container">
            <main>
              <div className="py-5 text-center"></div>
  
              <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">3</span>
                  </h4>
                  <ul className="list-group mb-3">
                    {props.products.map((product,index) => (
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div >
                        <h6 className="my-0">{product.productName}</h6>
                        <small className="text-body-secondary">{product.text}</small>
                      </div>
                      <span className="text-body-secondary">${product.price}</span>
                    </li>
  ))}     
                  
                    
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>${cartTotal}</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 col-lg-8">
                  <h4 className="mb-3">Payment Information</h4>
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          defaultValue=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
  
                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          defaultValue=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
  
                      <div className="col-12">
                        <label htmlFor="email" className="form-label"
                        >Email
                          <span className="text-body-secondary">(Optional)</span></label
                        >
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
  
                      <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
  
                      <div className="col-12">
                        <label htmlFor="address2" className="form-label"
                        >Address 2
                          <span className="text-body-secondary">(Optional)</span></label
                        >
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>
  
                      <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required>
                          <option defaultValue="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
  
                      <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select className="form-select" id="state" required>
                          <option defaultValue="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
  
                      <div className="col-md-3">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">Zip code required.</div>
                      </div>
  
                      <div className="col-lg-12">
                        <label htmlFor="cc-number" className="form-label"
                        >Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder="XXXX-XXXX-XXXX-XXXX"
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
  
                  </form>
                  <button className="w-100 btn btn-primary btn-lg" onClick={props.onShowConfirmation}>
                    Continue to checkout
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  const Confirmation = () => {
  return (
    <div className='d-flex flex-column mx-5 p-5 gap-5 justify-content-center'>
      <h4 className="mb-3">Thank you for your purchase!</h4>

      <div className="list-group">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your receipt</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li>
          <li
            className="list-group-item d-flex justify-content-between bg-body-tertiary"
          >
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

  return (
    <div>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <button className='nav-link px-2 fw-bold text-white' onClick={showIndex}>C&D's Furniture</button>

              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-light"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-warning" id="checkOut" onClick={showCheckout}>
                Check Out
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {showComponent === 'index' && <Index />}
      {showComponent === 'pagesecond' && <Checkout onShowConfirmation={showConfirmation} products = {cart} />}
      {showComponent === 'confirmation' && <Confirmation />}




      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p className="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our
            <a href="../getting-started/introduction/">getting started guide</a>.
          </p>
        </div>
      </footer>

    </div>
  );
}
//<script src="script.js"></script>









export default App;
