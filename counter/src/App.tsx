import {useState} from 'react';

import './App.css';

function App(){
  const [count, setCount] = useState(0);

  const increment = () => setCount(count +1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '100px'}}>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <div style={{marginTop: '20px'}}>
        <button onClick={increment}> + Incremnet </button>
        <button onClick={decrement}>- decrement</button>
        <button onClick= {reset}> Reset</button>

      </div>
    </div>
  )
}  
export default App;