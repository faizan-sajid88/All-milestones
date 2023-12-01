import React from "react";
import Button from "./component/reuseable/button.js"
import './App.css';


export default function SignupPage(){
    return (
      
        <div className="sign-up">
<div className="logo1"></div>

<Button color="transparent" name="Back to imgur" path="/" />
           
<div className="direct-in-account">
    <div className="account-box">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-apple"></i>
    <i class="fa-brands fa-google"></i>
    <i class="fa-brands fa-yahoo"></i>

      
    </div>
</div>
<form className="sign-up-form">
    <div className="sign-up-imgur">
    <input type="text" placeholder="Username"></input>
    <input type="text" placeholder="Email id"></input>
    <input type="password" placeholder="Password"></input>
    <input type="password" placeholder="Retype-Password"></input>
    <input type="number" placeholder="Phone Number"></input>
   <a href="www.google.com">Forget ?</a>
   
    </div>
    <div className="sign-up-btns">
    <Button name="sign in" color="transparent" path="/signin"/>
    <Button name="next" color="#5c69ff" id="sign-in-btn" />

    </div>
</form>
        </div>
     
    )
}