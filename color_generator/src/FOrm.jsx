import React, { useState } from 'react'

const FOrm = ({ addColor }) => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className="container">
      <h4>Color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value)
          }}
        ></input>
        <input
          type="text"
          onChange={(e) => {
            setColor(e.target.value)
          }}
          placeholder="#f15025"
        ></input>
        <button t className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default FOrm
