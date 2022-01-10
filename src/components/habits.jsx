import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {


  handleIncrease = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrease = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };

  render() {

    return (
      <div className="habits">
        <HabitAddForm />
        <ul>
          {this.props.habits.map(habit =>
          (<Habit key={habit.id} habit={habit}
            onIncrement={this.handleIncrease}
            onDecrement={this.handleDecrease}
            onDelete={this.handleDelete} />
          ))}
        </ul>
        <button className="habits-reset">Reset All</button>
      </div>
    );
  }
}

export default Habits;