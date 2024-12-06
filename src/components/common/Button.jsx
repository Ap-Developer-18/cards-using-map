import React from 'react'

const Button = ({ className, whiteTextName, blackTextName }) => {
  return (
    <button className={`${whiteTextName ? '' : ''} ${className}`}>
      {whiteTextName}{blackTextName}
    </button>
  )
}

export default Button
