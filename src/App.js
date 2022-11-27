import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;

    if(todos.length > 0){
      id = todos[0].id + 1;
    }

    const newTodo = {
      text: text,
      id: id,
      key: id,  
      complete: false,
    }

    setTodos(() => [newTodo, ...todos])

  }

  const handleComplete = (id) =>{
    const updatedTodos = todos.map((element) => {
      if(element.id == id){
        element.complete = !element.complete;
      }
      return element;
    })
    setTodos(updatedTodos)
  }

  const handleDelete = (id) =>{
    const refreshedTodos = todos.filter((element) => element.id != id);

    setTodos(refreshedTodos, ...refreshedTodos)
  }

  const elements = todos.map((first) => (
    <TodoItem
      text={first.text}
      id = {first.id}
      key = {first.key}
      todo = {first}
      handleDelete = {handleDelete}
      handleComplete = {handleComplete}
      complete = {first.complete}
    />
  ))

  console.log(todos);
  return (
    <div className="App">
      <div className="form">
        <h1 className='title'>Todo List React</h1>
        <TodoForm addTodo={addTodo}/>
        {elements}
      </div>
    </div>
  );
}

export default App;
