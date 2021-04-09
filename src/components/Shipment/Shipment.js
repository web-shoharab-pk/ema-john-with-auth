import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useHistory } from 'react-router';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();

  const onSubmit = data => {
    // console.log('form submitted', data)
    const saveCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: saveCart, shipment: data, orderTime: new Date() };
    console.log(orderDetails);
    fetch('http://localhost:4000/addOrder', {
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
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (

    <div className="row">
      <div className="col-md-6">
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
      <div className="col-md-6">
        <h1>please pay for me</h1>
        <ProcessPayment />
      </div>
    </div>


  );
};

export default Shipment;