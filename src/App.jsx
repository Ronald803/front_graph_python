import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CodeBoxComponent from './components/CodeBoxComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <CodeBoxComponent/>
    </div>
  )
}

export default App
