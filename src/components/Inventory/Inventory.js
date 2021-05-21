import React from 'react';
 
const Inventory = () => {
    const product = {};
    const handleAddProduct = () => {
       
        fetch('https://floating-taiga-67119.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div className="w-50 container">
            <form action="">
                <p><span>Name: </span><input className="form-control" type="text" /></p>
                <p><span>Price: </span><input className="form-control" type="tnumber" /></p>
                <p><span>Quantity: </span><input className="form-control" type="number" /></p>
                <p><span>Product Image</span><input className="form-control" type="file" /></p>
                <button onClick={handleAddProduct} className="btn w-100 btn-success">Add Product</button>
            </form>
           
        </div>
    );
};

export default Inventory;