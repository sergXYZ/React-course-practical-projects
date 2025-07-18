import React from 'react'

const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img"></img>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default Person
