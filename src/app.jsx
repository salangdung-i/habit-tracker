
import React, { PureComponent } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
class App extends PureComponent {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrease = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;

    });
    this.setState({ habits });
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;

    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits].filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAddForm = (name) => {
    const habits = [...this.state.habits];
    const habit = { id: habits.length + 1, name: name, count: 0 };
    habits.push(habit);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  }

  render() {
    return <>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
      <Habits
        habits={this.state.habits}

        onIncrement={this.handleIncrease}
        onDecrement={this.handleDecrease}
        onDelete={this.handleDelete}
        onAdd={this.handleAddForm}
        onReset={this.handleReset}
      >
      </Habits>
    </>
  };
}

export default App;
