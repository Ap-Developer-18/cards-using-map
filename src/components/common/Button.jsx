import React from 'react'

const Button = ({ whiteTextName, blackTextName, className }) => {
  return (
    <button className={`px-[30px] py-3 rounded-3xl text-sm leading-150 bg-pink text-white ${whiteTextName ? '' : 'bg-transparent border border-dark-light text-dark-light'} ${className}`}>
      {whiteTextName}{blackTextName}
    </button>
  )
}

export default Button
