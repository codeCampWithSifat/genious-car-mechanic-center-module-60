import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId)
  
  return (
    <div className="container mt-5 p-5 text-center">
      <div className="card">
        <img src={service.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
           {service.description}
          </p>
          <p className="card-text text-primary"> Total Price : {service.price} </p>
        </div>
      </div>

      <Link to={`/checkout/${serviceId}`}>
        <button className="btn btn-info mt-5">
          Proceed To Checkout {service.name}
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
