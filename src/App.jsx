import { useState } from 'react'
import Produtos from './ApiRedenrizar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Produtos />
    </>
  )
}

export default App
