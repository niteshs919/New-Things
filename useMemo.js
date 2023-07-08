import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useMemo } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Parent Rendered");
  });

  const memoized = useMemo(()=>{
    return <Child/>
  },[]) // It will not render multiple times

  return (
    <div className="App">
      {/* <Child /> */}
      {memoized}
      <button onClick={() => setCounter(counter + 1)}>
        Click me! you Clicked {counter}
      </button>
    </div>
  );
}

const Child = () => {
  useEffect(() => {
    console.log("Child component rendered");
  });
  return (
    <>
      <h1>This is a child component</h1>
    </>
  );
};
