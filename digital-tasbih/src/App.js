import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="number">{count}</h1>

      <button className="btn green" onClick={handleCount}>
        Count
      </button>

      <button className="btn red" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;