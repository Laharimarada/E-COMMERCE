import react, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import arrow from "../Assets/arrow.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { shopContext } from "../../Context/shopContext";
const Navbar = () => {
  const { cart } = useContext(shopContext);
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img
            src={logo}
            onClick={() => {
              navigate("/Home");
            }}
            alt=""
          />
        </div>
        <div className="nav-right">
          <ul>
            <li
              onClick={() => {
                setMenu("Home");
              }}
            >
              <Link to="/Home">Home</Link>
              {menu === "Home" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("Men");
              }}
            >
              <Link to="/mens">Men</Link> {menu === "Men" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("Kids");
              }}
            >
              <Link to="/kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}
            </li>
            {/* <li onClick={()=>{setMenu("Account")}}><Link to='/Login'>Account</Link>{menu==="Account"?<hr/>:<></>}</li> */}
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-login-cart">
            {/* <button onClick={()=>{setMenu("Login")}}><Link to='/Login'>Login</Link></button> */}
            <button
              onClick={() => {
                navigate("/Login");
                setMenu("");
              }}
            >
              Login
            </button>
            <img
              src={cart_icon}
              alt="img"
              width={30}
              height={30}
              onClick={() => {
                navigate("/cart");
                setMenu("");
              }}
            />
            <div className="nav-cart-count">{cart.length}</div>
          </div>
        </div>
        <div
          className="menu-icon"
          onClick={() => {
            document.querySelector(".sidebar").style.display = "flex";
          }}
        >
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <div className="sidebar">
        <div className="nav">
          <h3>Shop Now</h3>
          <div
            className="close"
            onClick={() => {
              document.querySelector(".sidebar").style.display = "none";
            }}
          >
            <i class="ri-close-large-line"></i>
          </div>
        </div>
        <hr />
        <ul>
          <li
            onClick={() => {
              setMenu("Home");
            }}
          >
            {menu === "Home" ? <img src={arrow}></img> : <></>}
            <Link to="/Home">Home</Link>
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            {menu === "Men" ? <img src={arrow}></img> : <></>}
            <Link to="/mens">Men</Link>
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            {menu === "Kids" ? <img src={arrow}></img> : <></>}
            <Link to="/kids">Kids</Link>{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Cart");
            }}
          >
            {menu === "Cart" ? <img src={arrow}></img> : <></>}
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            setMenu("Login");
          }}
        >
          <Link to="/Login">Login</Link>
        </button>
      </div>
    </>
  );
};
export default Navbar;
