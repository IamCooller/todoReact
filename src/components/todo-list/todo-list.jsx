import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) =>{

    const elements = todos.map((item)=>{
        const {id, icon,...itemProps} = item;
       
       return(
       <li className='list-group-item' key={id}>
           <TodoListItem {...itemProps}
            onDeleted={()=>{onDeleted(id)}} 
            onToggleImportant={()=>{onToggleImportant(id)}} 
            onToggleDone={()=>{onToggleDone(id)}}
             /> 
             <i className={`fa ${icon}`} aria-hidden="true"></i>
        </li>
       )
    });


    return(
        <ul className='list-group todo-list'>
        {elements}
        </ul>
    )
}

export default TodoList;


