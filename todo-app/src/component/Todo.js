import React from 'react';
import { MARK_COMPLETE } from './Types';

const Todos = ({ dispatch, todos }) => {
  const markComplete = id => {
    dispatch({
      type: MARK_COMPLETE,
      payload: { id }
    });
  };

  return (
    todos && (
      <div>
        {todos.map(item => {
          return item.completed ? (
            <div key={item.id}>
              <div style={{ textDecoration: 'line-through' }}>
                {item.item}
              </div>
            </div>
          ) : (
            <div key={item.id} onClick={() => markComplete(item.id)}>
              {item.item}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Todos;