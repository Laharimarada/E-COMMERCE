import React from "react";
import './Footer.css';
import logo from '../Assets/logo.png';
const Footer =()=>{
    return(
        <>
            <div className="footer">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h1>SHOPNOW</h1>
                </div>
                <div className="links">
                    <ul>
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <hr/>
                <div className="copyright">
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
            </div>
        </>
    )
}
export default Footer;