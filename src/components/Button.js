import React from 'react'

const Button = ({ classText, text, onClick }) => {
  return (
    <div>
        <button onClick={onClick} className={`btn ${classText}`}>{text}</button>
    </div>
  )
}

export default Button