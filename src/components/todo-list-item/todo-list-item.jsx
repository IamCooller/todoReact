import React,{Component} from 'react'
import './todo-list-item.css';

export default class TodoListItem extends Component{
   

     
    render(){
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done, active} = this.props;
        let classNames = 'todo-list-item';
        let classBtns = '';
        if(important){
            classNames+=' important'
        }
        if(done){
            classNames+=' done';
        }
        if(active){
            classBtns+= ' active'
        }
        return (
        <span className={classNames}>
            <span className="todo-list-item-label" onClick={onToggleDone} >{label}</span>
            <button type="button" className={`btn btn-outline-success btn-sm float-right ${classBtns}`} onClick={onToggleImportant}><i className="fa fa-exclamation"></i></button>
            <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}><i className="fa fa-trash-o"></i></button>
        </span>
        );
    }
}



