

import { useLocation } from "react-router-dom";

export default function  Product(){
    const location = useLocation();
const product = location.state.product;



    return(
        <div>
             <div className="product-div" >
                <div className="product-img"><img src={product.image}  alt="product" /></div>
                
                <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                  <b>Price: {product.price}</b>
                  <h3>{product.category}</h3>
                  <p>{product.description}</p>
                </div>
                </div>
                <button>add to cart</button>
                <button>buy now</button>
        </div>
    )
}