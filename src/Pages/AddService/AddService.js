import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";


const AddService = () => {
  const { register, handleSubmit,reset  } = useForm();
  const onSubmit = (data) => {

    fetch("http://localhost:5000/service", {
        method :"POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        if(result.insertedtedId) {
            reset()
            alert('Add Your Servie In The Database Successfully')
        }
    })
  };

  return (
    <div className="container w-50 mx-auto form_container" style={{ marginTop: "6rem" }}>
      <h2 className="text-primary">Please Add Your Service</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
      <input placeholder="Enter Name" {...register("name", { required: true, maxLength: 20 })} />
      <textarea placeholder="Enter Description " {...register("description",{ required: true })} />
      <input placeholder="Enter Price " type="number" {...register("price",{ required: true } )} />
      <input placeholder="Photo Url Link" type="text" {...register("img",{ required: true } )} />
      <input type="submit" value="Add Service" className="btn btn-info"/>
    </form>
    </div>
  );
};

export default AddService;
