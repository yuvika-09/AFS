import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <h1>Footer</h1>
      <h3>{props.email}</h3>
      <h3>{props.contact}</h3>
    </div>
  )
}

export default Footer
