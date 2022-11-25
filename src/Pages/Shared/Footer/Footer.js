import React from 'react';
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='text-center mt-5'>
      <p><small> copyright @ {year}</small></p>
      <p><small>All Right Reserved || sayedhossainsifat100@gmail.com</small></p>
    </footer>
  )
}

export default Footer
