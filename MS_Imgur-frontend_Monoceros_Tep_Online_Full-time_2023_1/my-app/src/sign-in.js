import React from "react";
import Button from "./component/reuseable/button.js"

import './App.css';


export default function SigninPage() {
    return (

        <div className="sign-in">
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
            <form className="sign-in-form">
                <div className="sign-in-imgur">
                    <input type="text" placeholder="Username or Email id"></input>

                    <input type="password" placeholder="Password"></input>
                    <a href="www.google.com">Forget ?</a>

                </div>
                <div className="sign-in-btns">
                    <Button name="Need an account" color="transparent" path="/signup" />
                    <Button name="Sign in" color="#5c69ff" id="sign-in-btn" />
                </div>
            </form>
        </div>

    )
}
