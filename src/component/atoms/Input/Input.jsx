import React from 'react'
import "./style.css"
function Input({ label, type, placeholder }) {
  return (
    <div className="input-field">
      <input type={type} placeholder={placeholder} id={label} />
    </div>
  )
}

export default Input;