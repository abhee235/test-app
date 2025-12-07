import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React now lsafjasdlfjsd</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR ---
          </p>
        </div>
        <p className="read-the-docs">
          Click on the button to see the counter in action
        </p>
      </header>
    </div>
  )
}

export default App

