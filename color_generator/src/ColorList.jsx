import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {console.log(colors)}
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />
      })}
    </section>
  )
}

export default ColorList
