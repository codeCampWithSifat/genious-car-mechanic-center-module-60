import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // console.log(service);
  const {id, name, img, price, description } = service;
  const navigate = useNavigate()

  const navigateToServiceDetail = id => {
      navigate(`service/${id}`)
  }

  return (
    <div className="service">
      <img src={img} alt="" />
      <div className="service_detail">
        <h3>{name}</h3>
        <p>Price : $ {price}</p>
        <p style={{ textAlign: "justify" }}>
          <small>{description}</small>
        </p>
        <button onClick={() => navigateToServiceDetail(id)}>Book {name}</button>
      </div>
    </div>
  );
};

export default Service;
