import React from 'react';
import { INPUT_CHANGE, FORM_SUBMIT, CLEAR_COMPLETED } from './Types';

const TodoForm = ({ state, dispatch }) => {
  const onValueChange = event => {
    dispatch({
      type: INPUT_CHANGE,
      payload: { value: event.target.value }
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch({
      type: FORM_SUBMIT
    });
  };

  const clearComplete = event => {
    event.preventDefault();
    dispatch({
      type: CLEAR_COMPLETED
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Task..."
          onChange={onValueChange}
          value={state.form}
        />
        <br />
        <input type="submit" className="button" value="Add" />
      </form>
      <button onClick={clearComplete}>Clear complete</button>
    </div>
  );
};

export default TodoForm;