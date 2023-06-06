import { useState } from "react";
// import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  setCount 
  function buttonClick(){
    setCount(count + 1)
  }

  return <div>
    <h1>Bdjobs Project</h1>
    <p>You clicked {count} times</p>
    <button onClick={buttonClick}>
        Click me
      </button>

  </div>;
}

export default Counter;
