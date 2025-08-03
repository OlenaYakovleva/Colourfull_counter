import React from "react";
import { CounterLogic } from "./CounterLogic";
import { CounterButton } from "./Button";
import { CounterHistory } from "./History";

export function Counter(): JSX.Element {
  return (
    <CounterLogic>
      {({ count, color, history, increase, decrease, reset, toggleColor }) => (
        <div className="counter">
          <h2 className="counter-title">Colourful Counter</h2>
          <div className={`counter-value ${color}`}>{count}</div>

          <div className="counter-controls">
            <CounterButton className="decrease" onClick={decrease}>
              -1
            </CounterButton>
            <CounterButton className="increase" onClick={increase}>
              +1
            </CounterButton>
          </div>

          <div className="counter-controls">
            <CounterButton className="reset" onClick={reset}>
              Reset
            </CounterButton>
            <CounterButton className={`${color}-bg`} onClick={toggleColor}>
              Change the colour
            </CounterButton>
          </div>

          <span className={`color-label blue ${color}`}>
            Current color: {color}
          </span>

          <CounterHistory history={history} />
        </div>
      )}
    </CounterLogic>
  );
}
