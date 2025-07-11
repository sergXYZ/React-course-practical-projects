import React, { useState } from 'react'

const FOrm = () => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section onSubmit={handleSubmit}>
      <h4>Color generator</h4>
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default FOrm
