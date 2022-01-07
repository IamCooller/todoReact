import React,{Component} from 'react'
import './todo-add.css';
export default class TodoAdd extends Component {
    state={
        label:'',
        icon:'',
        active:false,
        elements:[
            {id: 1, icon: 'fa fa-facebook-square'},
            {id: 2, icon: 'fa fa-fax'},
            {id: 3, icon: 'fa fa-calculator'},
        ]

    }
    labelChenge = (e) => {
     this.setState({
         label: e.target.value
     })
    }
    iconChange = (e)=>{
        this.setState({
            icon: (e.target.className.split(' active').join('')),
            active:!this.props.active
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.onAddItem(this.state.label, this.state.icon)
        this.setState({
            label:'',
            icon:''
        })
    }

    render(){
       const elements = this.state.elements.map((icons)=>{
           const {icon, id} = icons;
           let classIcon = `fa ${icon}`;
           if(this.props.active){
            classIcon +=' active';
           }
           return(
               <i key={id} className={classIcon} aria-hidden="true" onClick={this.iconChange}></i>
           )
        });

    return (
    <form className="bottom-panel d-flex mt-3" onSubmit={this.onSubmit}>
        <input type="text" 
        className="form-control new-todo-label mr-2"
         placeholder="What needs to be done?" 
         value={this.state.label} 
         onChange={this.labelChenge}/>
     
        <button type="submit" className="btn btn-outline-secondary">Add</button>
        <div className='icons w-100 d-flex'>
            {elements}      
        </div>
    </form>
    )
    }
}


