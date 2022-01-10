
import React from 'react';
import './app.css';
import Habit from './components/habit';

function App() {
  return <>
    <span className="habit-name">Reading</span>
    <span className="habit-count">8</span>
    <button>
      <i className="fas fa-plus-square"></i>
    </button>
    <button>
      <i className="fas fa-minus-square"></i>
    </button>

  </>
}

export default App;
