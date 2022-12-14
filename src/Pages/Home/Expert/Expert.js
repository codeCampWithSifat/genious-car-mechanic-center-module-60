import React from 'react'

const Expert = ({expert}) => {
  // console.log(expert)
  const {img , name} = expert ;
  return (
    <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  )
}

export default Expert
