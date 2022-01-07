import React,{Component} from 'react'
import './todo-search.css'
import TodoStatusFilter from '../todo-status-filter'
export default class TodoSearch extends Component {
    state={
        term:''
    }
    onChangeSearch = (e)=>{
        const term = e.target.value;
        this.setState({term})
        this.props.searchFilter(term);
    }

    render(){
        return(
            <div className="top-panel d-flex">
                <input type="text" className="form-control search-input" value={this.state.term} onChange={this.onChangeSearch} placeholder="type to search" />
                <TodoStatusFilter TodoStatusFilter={this.props.TodoStatusFilter} filterCheck={this.props.filterCheck} />
            </div>
        )
    }
}


