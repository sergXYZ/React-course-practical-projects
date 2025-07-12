import { nanoid } from 'nanoid'
import Form from './Form'
import Items from './Items'
import { useState } from 'react'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
  }
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
  }
  return (
    <section>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
