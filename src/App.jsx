import { useState } from 'react';
import './App.css';

function App() {
  const [boxPosition, setBoxPosition] = useState(300); // Initial position set to 300px below the button

  const moveBoxUp = () => {
    setBoxPosition(prevPosition => prevPosition - 50); // Move up by 50px
  };

  return (
    <div className="App">
      <h1>Move the Box Up!</h1>

      <button onClick={moveBoxUp}>Move Up</button>

      <div 
        className="box" 
        style={{ transform: `translateY(${boxPosition}px)` }}
      ></div>
    </div>
  );
}

export default App;
