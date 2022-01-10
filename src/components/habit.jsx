import React, { Component } from 'react';

class Habit extends Component {

  state = {
    count: 0,
    name: 'Reading',
  };

  handleIncrease = () => {
    // state 오브젝트 안에 있는 count를 증가한뒤 state를 업데이트해야함
    // this.state.count +=1 이렇게하게되면 state가 변경되었는지 리액트가 알수 없다.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {

    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{this.state.name}</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrease}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrease} >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;