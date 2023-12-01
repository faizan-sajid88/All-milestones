import React from "react";
import Navbar from "./header/navbar";
import Homeproduct from "./body/all-products/all-products";

export default function Home(){
    return(
        
        <div className="home">
            <Navbar />
            <Homeproduct />
        </div>
    )
}