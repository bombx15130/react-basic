import React,{ Component } from 'react'


// const List = (props) =>(
//     props.todo.map(list => {
//         return (
//             <li key={list.id}>
//                 {list.text}
//             </li>
//         )
//     })
// )
function List(props){
    return (
        props.todo.map(list => {
            return (
                <li key={list.id}>
                    {list.text}
                </li>
            )
        })
    )
}

class TodoApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            text:[]
        }
        this.addList = this.addList.bind(this)
        this.inputValue = this.inputValue.bind(this)
    }
    addList(e) {
        e.preventDefault()
        const nextItem = this.state.text.concat({id: new Date(), text: this.state.value})
        this.setState({value: '', text: nextItem})
    }
    inputValue(e) {
        this.setState({value: e.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addList}>
                    <input onChange={this.inputValue} value={this.state.value}/>
                    <button>
                        Add List
                    </button>
                </form>
                <ul>
                    <List todo={this.state.text}/>
                </ul>
            </div>
        )
    }
   }
export default TodoApp