import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [history, setHistory] = useState([]);

  const updateHistory = (newCount) => {
    setHistory(prev => {
      const newHistory = [newCount, ...prev];
      return newHistory.slice(0, 5); // only keep last 5 numbers
    });
  };

  const increase = () => {
    setCount(prev => {
      const updated = prev + 1;
      updateHistory(updated);
      return updated;
    });
  };

  const decrease = () => {
    setCount(prev => {
      const updated = prev - 1;
      updateHistory(updated);
      return updated;
    });
  };

  const reset = () => {
    setCount(0);
    setHistory([]); // clear history completely
  };

  const toggleColor = () => {
    setColor(prev => (prev === "blue" ? "red" : "blue"));
  };

  return (
    <div className="counter">
      <h2 className="counter-title">Colourful Counter</h2>

      <div className={`counter-value ${color}`}>{count}</div>

      <div className="counter-controls">
        <button className="decrease" onClick={decrease}>-1</button>
        <button className="increase" onClick={increase}>+1</button>
      </div>

      <div className="counter-controls">
        <button className="reset" onClick={reset}>Reset</button>

        <button
          className={`${color}-bg`}
          onClick={toggleColor}
        >
          Change the colour
        </button>
      </div>

      <span className={`color-label blue ${color}`}>Current color: {color}</span>

      <div className="history">
        <h3>Last 5 numbers:</h3>
        <ul className="history-list">
          {history.length === 0 ? (
            <li>History is empty</li>
          ) : (
            history.map((num, index) => (
              <li key={index}>: {num}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
