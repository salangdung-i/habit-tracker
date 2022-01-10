import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Habit" />
        <button> Add</button>
      </div>
    );
  }
}

export default HabitAddForm;