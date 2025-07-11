import { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />

          <button onClick={() => setPeople([])} className="btn btn-block">
            Clear list
          </button>
        </section>
      </main>
    </>
  )
}
export default App
