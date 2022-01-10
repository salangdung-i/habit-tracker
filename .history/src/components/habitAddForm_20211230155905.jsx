import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <div>
        <form >
          <input className="add-input" type="text" placeholder="Habit" />

        </form>
        <button className="add-button"> Add</button>
      </div>
    );
  }
}

export default HabitAddForm;