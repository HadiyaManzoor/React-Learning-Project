import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css';
const Button = () => {
    const onClick=()=>{
         const cart="True";
    }
  return (
    <div>
        <button className="button" onClick={onClick}>Add to Cart</button>
    </div>
  )
}

export default Button