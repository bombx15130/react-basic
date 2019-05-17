import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
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

// class TodoApp extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             value: '',
//             text:[]
//         }
//         this.addList = this.addList.bind(this)
//         this.inputValue = this.inputValue.bind(this)
//     }
//     addList(e) {
//         e.preventDefault()
//         const nextItem = this.state.text.concat({id: new Date(), text: this.state.value})
//         this.setState({value: '', text: nextItem})
//     }
//     inputValue(e) {
//         this.setState({value: e.target.value})
//     }
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.addList}>
//                     <input onChange={this.inputValue} value={this.state.value}/>
//                     <button>
//                         Add List
//                     </button>
//                 </form>
//                 <ul>
//                     <List todo={this.state.text}/>
//                 </ul>
//             </div>
//         )
//     }
// }

class TodoApp extends Component{
    constructor(props){
        super(props)
        this.addList = this.addList.bind(this)
        this.inputValue = this.inputValue.bind(this)
    }
    addList(e) {
        e.preventDefault()
        
        const nextItem = this.props.text.concat({id: new Date(), text: this.props.value})
        // this.setState({value: '', text: nextItem})
        this.props.dispatch(addTodo({ value: '', text: nextItem}))
        console.log(this.props.text)
    }
    inputValue(e) {
        // this.setState({value: e.target.value})
        this.props.dispatch(addTodo({value:e.target.value}))
        console.log(e.target.value)
        console.log(this.props.value)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addList}>
                    <input onChange={this.inputValue} value={this.props.value}/>
                    <button>
                        Add List
                    </button>
                </form>
                <ul>
                    <List todo={this.props.text}/>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.todoReducers.value,
        text: state.todoReducers.text
    }
}
// const mapDispatchToProps = ({ dispatch }) => {
//     return {
//         addList: (e) => {
//             e.preventDefault()
//             dispatch(todoList({value:,text:}))
//         }
//     }
// }

export default connect(
    mapStateToProps
)(TodoApp)
