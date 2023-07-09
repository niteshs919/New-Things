import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
function App() {
  const countRef = useRef(0)
// when we change the useRef value so component will not render.
  // const handle = () => {  
  //   countRef.current++;
  //   console.log(countRef)
  // }

  const handle = () => {  
   countRef.current.focus()
  }

  console.log("component is rendering")
  return (
    <div className="App">
      <input type='text' ref={countRef}/>
     <br/>
     <button onClick={handle}>Click me</button>
    </div>
  );
}

export default App;