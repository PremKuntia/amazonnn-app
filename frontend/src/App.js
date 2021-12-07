import React from "react";
import data from "./data.js";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            {/* fixing link from index.html to / i.e, root folder from public*/}
            Amazonnn
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {/* jsx comment should be inside curley braces, 
          every javascript code should be in curley braces in react app
          map() to convert javascript product item to html elements,
          for each product...,
          when you are using map in react application the first element after map should have a key value with different id.
           (`/product/$(product._id) = we are setting url for the image,
           image and link should point to the same locatin*/}
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
