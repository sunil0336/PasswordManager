import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='bg-black text-white p-3 rounded-xl' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
