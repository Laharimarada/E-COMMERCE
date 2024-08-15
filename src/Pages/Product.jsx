// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import BreadCrum from "../Components/BreadCrums/BreadCrum";
// import shopcontext from '../Components/Assets/kids_data';

// const Product = () =>{
//     const {all_product} = useContext(shopcontext);
//     const {ProductId} = useParams();
//     const product = all_product.find((e)=> e.id === Number(ProductId));
//     console.log(product);
//     return (
//         <div>
//             <BreadCrum Product = {product}/>   
//         </div>
//     )
// }
// export default Product;