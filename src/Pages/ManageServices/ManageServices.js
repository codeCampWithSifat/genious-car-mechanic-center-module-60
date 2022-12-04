import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDeleteService = (id) => {
    if (window.confirm("Are You Sure You Want To Delete This One")) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const restService = services.filter(
              (service) => service._id !== id
            );
            setServices(restService);
            alert("Deleted Your Service Successfully");
          }
        });
    }
  };
  return (
    <div className="container text-center" style={{ marginTop: "8rem" }}>
      {services.map((service) => (
        <div key={service._id}>
          <h4>{service.name}</h4>
          <button
            onClick={() => handleDeleteService(service._id)}
            className="btn btn-info"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
