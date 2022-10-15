import { useState } from "react";
import "./App.css";

function Count() {
  // useState hook
  // example 2, to set and update count
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ height: "30rem" }}>
      <p>Example two</p>
      <h2>Count is {count}</h2>

      <button
        type="button"
        onClick={increaseCount}
        style={{ backgroundColor: "green", color: "#fff" }}
      >
        increment
      </button>
      <button
        type="button"
        onClick={decreaseCount}
        style={{ backgroundColor: "blue", color: "#fff" }}
      >
        decrement
      </button>
      <button
        type="button"
        onClick={reset}
        style={{ backgroundColor: "red", color: "#fff" }}
      >
        reset
      </button>
    </div>
  );
}

export default Count;
