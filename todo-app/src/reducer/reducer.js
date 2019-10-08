
import { INPUT_CHANGE, FORM_SUBMIT, MARK_COMPLETE, CLEAR_COMPLETED } from '../component/Types'
import uuid from 'uuid';

export const initialState = {
  todos: [
    {
      id: 3892987589,
      item: 'Learn about reducers',
      completed: false,
    }
  ],
  form: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        form: action.payload.value
      };

    case FORM_SUBMIT:
      return {
        todos: [
          ...state.todos,
          {
            id: uuid(),
            item: state.form,
            completed: false,
          }
        ],
        form: ''
      };

    case MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) return todo;
          return {
            id: todo.id,
            item: todo.item,
            completed: true,
          };
        })
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };
    default:
      return state;
  }
};