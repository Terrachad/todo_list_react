import React from 'react'
import {useState} from 'react'


function TodoForm(props) {

    const [textTodo, setTextTodo] = useState();


    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addTodo(textTodo);
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTextTodo(e.target.value)}/>
            <button >Add Todo</button>
            </form>
        </div>
    </div>
  )
}

export default TodoForm