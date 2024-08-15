import React from "react";
import './Popular_kids.css'
import data_product_kids from "../Assets/kids_data";
import Item from "../Item";
const Popular_kids =()=>{
    return (
        <div className="popular">
            <div>
                <h1>Popular in kids</h1>
            </div>
            <hr/>
            <div className="popular-item">
                {data_product_kids.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular_kids;