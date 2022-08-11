import './App.css';
import { useRef } from 'react';

function App() {
  const inputRef = useRef()
  const ref = useRef(0)

  console.log(inputRef.current)

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="App">
      {ref.current}
      <h1>Hello KDA</h1>
      <input ref={inputRef} type="text" /> <br /> <br /> 
      <button onClick={focus}>Focus Input</button>
      <br /> <br />
      <div>
        lorem ipsum dolor sit amet, consectetur adip
      </div>
    </div>
  );
}

export default App;
