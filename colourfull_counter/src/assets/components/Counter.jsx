import { useState } from "react";




export function Counter() {
    return (
      <div className="counter">
        <div className="counter-value blue">0</div>
  
        <div className="counter-controls">
          <button className="decrease">-1</button>
          <button className="increase">+1</button>
        </div>
  
        <div className="counter-controls">
          <button className="reset">Reset</button>
          <button className="toggle-color">Change the colour</button>
        </div>
  
        <div className="history">
          <h3>Last 5 changes done:</h3>
          <ul className="history-list">
            <li>History is empty</li>
          </ul>
        </div>
      </div>
    );
  }


//   3. Компонент, що використовує контекст
// function ThemedButton() {
//   // Отримання даних з контексту
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       style={{
//         backgroundColor: theme === 'light' ? '#fff' : '#333',
//         color: theme === 'light' ? '#333' : '#fff',
//         padding: '10px 20px',
//         border: '1px solid #ccc',
//         borderRadius: '4px',
//         cursor: 'pointer'
//       }}
//     >
//       Поточна тема: {theme}. Змінити тему
//     </button>
//   );
// }