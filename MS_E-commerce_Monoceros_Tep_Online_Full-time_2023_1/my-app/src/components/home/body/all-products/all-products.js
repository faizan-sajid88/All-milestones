import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homeproduct(){
    const [product, setProduct] = useState([]) 
 
const navigate = useNavigate()

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=> setProduct(data))
    .catch(err => console.log("error"))
},[])
    return(
      <div className="Home-page-products">
        <select>
            <option>All product</option>
        </select>
        <div className="products">
            {
            product.length
            ? product.map((item,index)=>(
            <div className="products-div" 
            key={index}
            onClick={()=>{
                navigate("/product",{
                    state:{ product:item}
                })            
            }}>
                <div className="products-img"><img src={item.image}  alt="product" /></div>
                <h2 className="products-tital">{item.title}</h2>
                <p>Price: <b>{item.price}</b></p>
                <button></button>
                </div>
            ))
            
            :  null} </div>
           
        </div>
    )
}
