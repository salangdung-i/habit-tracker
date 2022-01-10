import React, { Component } from 'react';

class Habits extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0 },
      { name: 'Running', count: 0 },
      { name: 'Coding', count: 0 },
    ]
  }
  render() {
    return (
      <ul>
        <li>
          {this.state.habits.map(habit => habit)}
        </li>
      </ul>
    );
  }
}

export default Habits;