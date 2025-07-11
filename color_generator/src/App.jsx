import { useState } from 'react'
import FOrm from './FOrm'
import Values from 'values.js'
import ColorList from './ColorList'

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10))
  return (
    <main>
      <FOrm />

      <ColorList colors={colors} />
    </main>
  )
}
export default App
