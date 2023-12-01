import React from "react";

import { NavLink } from "react-router-dom";

export default function signin(){
    return(
    <div>
        <h1>signin</h1>
<NavLink to="/signup">signup</NavLink>
    </div>
    )
}