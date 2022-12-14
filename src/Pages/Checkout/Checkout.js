import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = e => {
    e.preventDefault()
    const order = {
      name : user.displayName,
      email : user.email,
      service : service.name,
      serviceId : serviceId,
      address : e.target.address.value,
      phone : e.target.phone.value, 
    }
    console.log(order);
    axios.post("http://localhost:5000/order", order)
    .then(res => {
      console.log(res);
      const {data} = res ;
      if(data.insertedId){
        toast("Your Order Booked Successfully");
        e.target.reset();
      }
    })
   
  }

  // const [user, setUser] = useState({
  //   name : "Sifat Sayed",
  //   email : "sayedhossainsifat100@gmail.com",
  //   address : "Gognagar Narayangonj",
  //   phone : "01997741967",
  // });

  // const handleAddressChange = e => {
  //   console.log(e.target.value);
  //   const {address, ...rest} = user ;
  //   const newAddress= e.target.value ;
  //   const newUser = {address: newAddress, ...rest};
  //   console.log(newUser)
  //   setUser(newUser);
  // }
  return (
    <div style={{ marginTop: "7rem" }} className="container  w-50 mx-auto">
      <h2 className="text-primary">
        Please Pay For Booking This Item {service.name}
      </h2>
      <form className="w-100 mt-5" onSubmit={handlePlaceOrder}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Name "
            value={user?.displayName}
            readOnly
            disabled
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Email "
            value={user?.email}
            readOnly
            disabled
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="service"
            value={service.name}
            readOnly
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Service Name "
            disabled
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Address"
            autoComplete="off"
           
            // onChange= {handleAddressChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter Your Phone Number"
            autoComplete="off"
          />
        </div>
        <button type="submit"  className="btn btn-primary w-100">
          Place Your Order
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
