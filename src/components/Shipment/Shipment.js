import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Shipment.css';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null)
  const history = useHistory();

  const onSubmit = data => {
    // console.log('form submitted', data)
    setShippingData(data)
  };

  const handlePaymentSuccess = paymentId => {
    const saveCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser,
       products: saveCart,
        shipment: shippingData, 
        paymentId: paymentId,
        orderTime: new Date() };
    console.log(orderDetails);
    fetch('https://floating-taiga-67119.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder();
          alert("your ordered placed sucessfully");
          history.push('/shop');
        }
      })
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (

    <div className="row">
      <div style={{display: shippingData ? 'none' : 'block'}} className="col-md-6">
        <h3 className="p-3">Please Inter Your delivery Address</h3> 
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input className="form-control" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input className="form-control" name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input className="form-control" name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input className="form-control" type="submit" />
        </form>
      </div>
      <div style={{display: shippingData ? 'block' : 'none'}} className="col-md-6">
        <h1>please pay for me</h1>
        <ProcessPayment handlePayment={handlePaymentSuccess} />
      </div>
    </div>


  );
};

export default Shipment;