

export default function Cart(props){
    
    return(
    <div>
        <h1>Cart</h1>
        <div className="cart-item">
            <div className="cart-product">
                <div></div>
            </div>
        </div>

    </div>
    )
}


/*import Products from "../src/Products";

const actions = {
  add_To_Cart: "addToCart",

  addToCart: (item) => ({
    type: actions.add_To_Cart
    payload: Products
  })
};

export default actions;