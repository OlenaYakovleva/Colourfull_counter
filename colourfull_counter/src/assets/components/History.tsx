import React from "react";
type CounterHistoryProps = {
    history: number[];
  };
  
  export const CounterHistory = ({ history }: CounterHistoryProps) => (
    <div className="history">
      <h3>Last 5 numbers:</h3>
      <ul className="history-list">
        {history.length === 0 ? (
          <li>History is empty</li>
        ) : (
          history.map((num, index) => <li key={index}>: {num}</li>)
        )}
      </ul>
    </div>
  );
  