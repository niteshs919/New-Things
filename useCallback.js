import logo from "./logo.svg";
import "./App.css";
import { useState, useCallback } from "react";

const functionsCounter = new Set()
function App() {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

 // when component all this funtion take some space after we change the value of any state all function will again take some new memory.
  // In that condition all function will render.

  
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // const incrementotherCounter = () => {
  //   setOtherCounter(otherCounter + 1);
  // };
  
// useCallback(callback,dependencies)
  const increment = useCallback(() => {
    setCount(count + 1);
  },[count]);

  const decrement =useCallback( () => {
    setCount(count - 1);
  },[count])
  const incrementotherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  },[otherCounter]);

  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementotherCounter)
 
  console.log(functionsCounter)
  return (
    <div className="App">
      count : {count}<br/>
      otherCounter : {otherCounter}<br/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementotherCounter}>incrementotherCounter</button>
    </div>
  );
}

export default App;