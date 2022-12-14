import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  // useEffect(() => {
  //   fetch("http://localhost:5000/order")
  //   .then(res => res.json())
  //   .then(data => {
  //     setOrders(data);
  //   })
  // },[])

  // alternative system
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);
  return (
    <div style={{ marginTop: "6rem" }} className="container">
      <h2>
        Total Orders : {orders.length === 0 ? "Loading......." : orders.length}
      </h2>
    </div>
  );
};

export default Order;
