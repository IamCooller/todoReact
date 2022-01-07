import React,{Component} from 'react'
import './app.css';
import TodoAdd from "../todo-add";
import TodoHead from "../todo-head";
import TodoList from "../todo-list";
import TodoSearch from "../todo-search";




export default class App extends Component{
    maxId= 100
   state = {
    todoData:[
        this.createTodoItem('Drink Coffee', 'fa-coffee'),
        this.createTodoItem('Bild react App', "fa fa-code"),
        this.createTodoItem('Search homeworks', "fa fa-codepen"),
    ],
    term:'',
    filter:'All'
   } 

   createTodoItem(label, icon){
       return{
           label,
           icon,
           important: false,
           done:false,
           id: this.maxId++,
           active: false
       }
   }

   onDeletedItem = (id)=>{
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=> el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return{todoData: newArray}
        })
   }

   onAddNewItem  = (text, icon)=>{
       this.setState(({todoData})=>{
           const newItem = this.createTodoItem(text, icon);
           const newArray = [...todoData, newItem];
           return{todoData: newArray}
       })
   }

   toggleProperty(arr,id, propName){
        const idx = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]:!oldItem[propName]}
        return [...arr.slice(0, idx), newItem,...arr.slice(idx + 1)];

   }

   onToggleImportant = (id)=>{
    this.setState(({todoData})=>{
        return{
            todoData: this.toggleProperty(todoData, id, 'important')
        }
       })
   }

   onToggleDone = (id)=>{
    this.setState(({todoData})=>{
        return{
            todoData: this.toggleProperty(todoData, id, 'done')
        }
       })
   }
   termState = (label)=>{
    this.setState({
        term: label.toLowerCase()
    })
   }
   termFilter = (filter)=>{
    this.setState({
        filter
    })
   }
   search=(items, term)=>{
    if(term.length === 0){
        return items
    }
   return items.filter(item => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
   }
   filterBtn=(items, filters)=>{
    switch(filters){
        case 'All':
            return items;
        case 'Active':
            return items.filter((item)=>!item.done);
        case 'Done':
            return items.filter((item)=> item.done);
        default:
            return items;
    }
   }
    render(){
       const {todoData, term, filter} = this.state;
        const visibleData = this.filterBtn(this.search(todoData, term), filter);
       
       const doneCount = todoData.filter((el)=>el.done).length;
       const todoCount = todoData.length-doneCount;
       return(
        <div className="container">   
        <div className="todo-app">
            <TodoHead toDo={todoCount} toDone = {doneCount} />
            <TodoSearch searchFilter={this.termState} TodoStatusFilter={this.termFilter} filterCheck={filter} />
            <TodoList todos={visibleData} filter={filter}  onDeleted={this.onDeletedItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
            <TodoAdd onAddItem={this.onAddNewItem} />
        
        </div>
    </div>
       )
   
    }
}


