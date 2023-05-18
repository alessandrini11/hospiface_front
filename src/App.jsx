import { useState } from 'react'
import Index from './pages/patient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index/>
    </>
  )
}

export default App
