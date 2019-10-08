import React, { useReducer } from 'react';
import Todos from './component/Todo';
import TodoForm from './component/TodoForm';
import { reducer, initialState } from './reducer/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


      return (
            <div className="App">
                  <Todos todos={state.todos} dispatch={dispatch} />
                  <TodoForm state={state} dispatch={dispatch} />
            </div>
      );
}

export default App;

