import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }
  render() {
    return (
      <div className="habits">
        <HabitAddForm />
        <ul>
          {this.state.habits.map(habit =>
          (<Habit key={habit.id} habit={habit} />
          ))}
        </ul>
        <button className="habits-reset">Reset All</button>
      </div>
    );
  }
}

export default Habits;