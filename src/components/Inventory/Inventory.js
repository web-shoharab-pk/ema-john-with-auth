import React from 'react';


const Inventory = () => {
    const product = {};
    const handleAddProduct = () => {
        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text" /></p>
                <p><span>Price: </span><input type="tnumber" /></p>
                <p><span>Quantity: </span><input type="number" /></p>
                <p><span>Product Image</span><input type="file" /></p>
                <button onClick={handleAddProduct} className="btn btn-success">Add Product</button>
            </form>
           
        </div>
    );
};

export default Inventory;