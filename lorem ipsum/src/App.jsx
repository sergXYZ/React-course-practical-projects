import { useState } from 'react'
import data from './data'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState({ data })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <main>
      <h2>Lorem Ipsum Starter</h2>;
      <form onSubmit={handleSubmit}>
        <label>paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
          min="1"
          max="8"
          step="1"
        ></input>
        <button>Generate</button>
      </form>
    </main>
  )
}
export default App
