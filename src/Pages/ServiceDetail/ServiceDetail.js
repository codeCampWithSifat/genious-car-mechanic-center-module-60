import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
    const {serviceId} = useParams()
  return (
    <div className='container mt-5 p-5'>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail {serviceId}</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
      <h2>Welcome To Detail</h2>
    </div>
  )
}

export default ServiceDetail
