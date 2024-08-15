import React, { useState, useContext } from "react";
import { shopContext } from "../Context/shopContext";
import "./Cart.css";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  const { cart, removeItem } = useContext(shopContext);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * quantities[product.id],
    0
  );

  return (
    <>
      <div className="cart-main">
        {cart.map((product) => (
          <h4
            key={product.id}
            style={{
              color: "black",
              textAlign: "center",
              paddingTop: "20px",
              paddingRight: "20px",
              alignItems: "center",
            }}
          >
            <div className="name-price">
              <div>Name: {product.name}</div>
              <div>Price: ${product.price}</div>
            </div>

            <img
              src={product.image}
              className="cart-image"
              alt={product.name}
            />
            <div>
              <button
                onClick={() => handleDecrement(product.id)}
                style={{ width: "20px", fontSize: "15px" }}
              >
                -
              </button>
              <span style={{ fontSize: "18px", padding: "5px,5px,0px,5px" }}>
                {quantities[product.id]}
              </span>
              <button
                onClick={() => handleIncrement(product.id)}
                style={{ width: "20px", fontSize: "15px" }}
              >
                +
              </button>
            </div>
            <button className="remove" onClick={() => removeItem(product.id)}>
              remove
            </button>
          </h4>
        ))}
        <h1>Total Price: ${totalPrice}</h1>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
