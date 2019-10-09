import React, { useReducer } from 'react';
import Todos from './component/Todo';
import TodoForm from './component/TodoForm';
import { reducer, initialState } from './reducer/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


      return (
            <div style={{textAlign: "center", boxShadow: '0px 4px 8px 0 rgba(0,0,0,0.2)',
                          maxWidth: "500px", width: '100%', 
                          background: '#DEB887', margin: '0 auto'}}>
                  <h1>My Todo App</h1>
                  <Todos todos={state.todos} dispatch={dispatch} />
                  <TodoForm state={state} dispatch={dispatch} />
            </div>
      );
}

export default App;

