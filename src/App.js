import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([{ id: 0, title: '리액트를 배워봅시다' }]);

  return (
    <div className="app__container">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

const CreateTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const idRef = useRef(0);

  const handleTitleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: idRef.current++,
      title,
    };
    setTodos([...todos, newTodo]);
    setTitle('');
  };

  return (
    <div className="create__todo__container">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input value={title} onChange={handleTitleChange} />
            <button type="submit">추가하기</button>
          </div>
          <h1>Todo List</h1>
        </div>
      </form>
    </div>
  );
};

const TodoList = ({ todos }) => {
  return (
    <div className="todo__list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const Todo = ({ todo }) => {
  return <div className="todo__item">{todo.title}</div>;
};

export default App;
