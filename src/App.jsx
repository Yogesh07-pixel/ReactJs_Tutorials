import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1
    if(counter + 1 > 20){
      alert("Limit Exceeded");
    }
    else{
    setCounter(counter + 1);
    }
    // console.log("Clicked", counter);
  };

  const SubValue = () => {
    // counter = counter - 1;
    if( counter -1 < 0){
      alert("This is the minimum Value cannot decrease further");
    }
    else{
      setCounter(counter - 1);
    }
    // console.log("Clicked", counter);
  };


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={SubValue}>Reduce Value {counter}</button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
