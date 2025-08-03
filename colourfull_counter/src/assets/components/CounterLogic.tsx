import React, { useState } from "react";


type Color = "blue" | "red";

export interface CounterProps {
  children: (data: {
    count: number;
    color: Color;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
    toggleColor: () => void;
    history: number[];
  }) => JSX.Element;
}



export function CounterLogic({ children }: CounterProps): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<Color>("blue");
  const [history, setHistory] = useState<number[]>([]);
  const updateHistory = (newCount: number): void => {
    setHistory((prev) => [newCount, ...prev].slice(0, 5));
  };

  const increase = (): void => {
    setCount((prev) => {
      const updated = prev + 1;
      updateHistory(updated);
      return updated;
    });
  };

  const decrease = (): void => {
    setCount((prev) => {
      const updated = prev - 1;
      updateHistory(updated);
      return updated;
    });
  };

  const reset = (): void => {
    setCount(0);
    setHistory([]);
  };

  const toggleColor = (): void => {
    setColor((prev) => (prev === "blue" ? "red" : "blue"));
  };

  return children({
      count,
      color,
      increase,
      decrease,
      reset,
      toggleColor,
      history,
    });
  }

    // <div className="counter">
    //   <h2 className="counter-title">Colourful Counter</h2>
    //   <div className={`counter-value ${color}`}>{count}</div>

    //   <div className="counter-controls">
    //     <CounterButton className="decrease" onClick={decrease}>
    //       -1
    //     </CounterButton>
    //     <CounterButton className="increase" onClick={increase}>
    //       +1
    //     </CounterButton>
    //   </div>

    //   <div className="counter-controls">
    //     <CounterButton className="reset" onClick={reset}>
    //       Reset
    //     </CounterButton>
    //     <CounterButton className={`${color}-bg`} onClick={toggleColor}>
    //       Change the colour
    //     </CounterButton>
    //   </div>

    //   <span className={`color-label blue ${color}`}>Current color: {color}</span>

    //   <CounterHistory history={history} />
    // </div>
