import React, { memo } from 'react';

const HabitAddForm = memo(props => {

  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef} className="add-input" type="text" placeholder="Habit" />
        <button className="add-button"> Add</button>
      </form>
    </div>
  );
});

export default HabitAddForm;


