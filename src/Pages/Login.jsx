import React, { useState } from "react";
import './Login.css';
const LoginSignUp = () =>{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const handleClick=(event)=>{
        if(userName === "" || password === ""){
            alert("please enter valid credentials");
        }
    }
    return (
        <div className="login-container">
            <div className="content">
                <h2>Login</h2>
                <div className="input-text">
                    <input type="text" placeholder="Enter Username"/>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="continue">
                    <button onClick={handleClick}>Continue</button>
                </div>
                <div className="create-account">
                    <p>Create an account?<span>Click here</span></p>
                    <div className="checkbox">
                        <input type="checkbox" name="checkbox" id="check" />
                        <p>By continuing I agree to the terms of use &privacy policy</p>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
export default LoginSignUp;