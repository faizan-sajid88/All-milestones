import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return (
<div className="navbar">
    <div className="logo">logo</div>
    <div className="input-div"><input type="text" placeholder="Search here" /></div>
    <div className="utility">
        <div className="cart-icon" >
        <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className="user-icon" >
<NavLink to="/signin">user</NavLink>
        </div>
    </div>
</div>
    )
}
export default Navbar