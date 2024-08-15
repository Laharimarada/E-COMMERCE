import React, {useState } from "react";
import image from '../Components/Assets/image.png';
import './Home.css'
import Popular from "../Components/Popular/Popular";
import Popular_kids from "../Components/Popular/Popular_kids";
import Footer from "../Components/Footer/Footer";
const Home = () =>{
    const [menu,setMenu] = useState("home");
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-left">
                    <div>
                        <p>Explore our latest arrivals</p>
                        <p>and uncover new collections</p>
                        <p>exclusively for men and kids!</p>
                    </div>
                    <div className="button">
                        <button onClick={()=>{window.scrollTo({left:0,top:500,behavior:"smooth"})}}>Explore</button>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={image}/>
                </div>
            </div>
            <Popular/>
            <Popular_kids/>
            <div className="subscription">
                <div className="text">
                    <h1>Get Exclusive Offers On Your Email</h1>
                    <p>Subscribe to our newsletter and stay updated</p>
                </div>
                <div className="input">
                    <input type="text" placeholder="Your email id"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default Home;