import { useState } from "react";

function App() {
  // const [state, setState] = useState("abcd");
  const [state, setState] = useState({firstName: "nitesh", lastName: "sikarwar"});
  const changeName = () => {
    setState(state==="abcd" ? 'ABCD' : "abcd") // it will according to the condition
   setState({firstName:"abcd"})  //output :  abcdundefined
   setState({...state, firstName: "abcd"}) // output : abcdsikarwar
  }
  return (
    <>
      {/* <h1>name is {state}</h1> */}
      <h1>name is {state.firstName + state.lastName}</h1>
      <button onClick={changeName}>Click me</button>
    </>
  );
}

export default App;