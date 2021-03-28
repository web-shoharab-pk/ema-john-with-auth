import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // const {price} = props.cart;
    //console.log(cart);
    const shipping = cart.reduce( (total, prd) => total + prd.shipping , 0 )
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        console.log(product);
        total = total + product.price  ;
    }
 

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax));

 
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: { total}</p>
            <p><small>Shiiping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;