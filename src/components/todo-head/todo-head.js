import React from 'react'
import './todo-head.css';
const TodoHead = ({toDo, toDone}) =>{
    return(
        <div className="app-header d-flex"><h1>Todo List</h1><h2>{toDo} more to do, {toDone} done</h2></div>
    )
}

export default TodoHead
