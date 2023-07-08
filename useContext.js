import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext } from "react";
const context = createContext("intial value");

function App() {
  const value = "My Context Value";
  return (
    <div className="App">
      <context.Provider value={value}>
        <MyComponent />
      </context.Provider>
    </div>
  );
}
function MyComponent() {
  const value = useContext(context);
  return <span>{value}</span>;
}
export default App;