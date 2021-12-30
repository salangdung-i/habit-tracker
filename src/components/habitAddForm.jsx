import React, { Component } from 'react';

class HabitAddForm extends Component {
  render() {
    return (
      <div>
        <form className="add-form">
          <input className="add-input" type="text" placeholder="Habit" />
          <button className="add-button"> Add</button>

        </form>
      </div>
    );
  }
}

export default HabitAddForm;