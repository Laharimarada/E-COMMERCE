import React, { useState } from "react";
import "./Item.css";
import { useContext } from "react";
import { shopContext } from "../Context/shopContext";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const Item = (props) => {
  const Navigate = useNavigate();
  const { setCart, setPreview } = useContext(shopContext);
  return (
    <div
      className="item-container"
      onClick={() => {
        setPreview({
          id: props.id,
          name: props.name,
          image: props.image,
          price: props.new_price,
        });
        Navigate(`/${props.id}`);
      }}
    >
      <div className="item">
        {/* <Link to={`/product/${props.id}`}></Link> */}
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </div>
      <button
        onClick={() => {
          setCart((prev) => [
            ...prev,
            {
              id: props.id,
              image: props.image,
              name: props.name,
              price: props.new_price,
            },
          ]);
          alert(`Item "${props.name}" has been added to the cart.`);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export default Item;
