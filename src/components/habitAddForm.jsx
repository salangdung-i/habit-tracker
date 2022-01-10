import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef} className="add-input" type="text" placeholder="Habit" />
          <button className="add-button"> Add</button>
        </form>
      </div>
    );
  }
}

export default HabitAddForm;