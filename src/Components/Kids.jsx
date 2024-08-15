import React from "react";
import banner_mens from '../Components/Assets/banner_kids.png';
import data_product from "../Components/Assets/Kids_information";
import Item from "../Components/Item";
import '../Components/Mens.css';
import Footer from "./Footer/Footer";
const Mens = () =>{
    return (
        <>
            <div className="mens-container">
                <div className="banner">
                    <img src={banner_mens} alt=""/>
                </div>
                <div className="mens-products">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                 })}
                </div>
            </div>
            <Footer/>
        </>         
    )
}
export default Mens;