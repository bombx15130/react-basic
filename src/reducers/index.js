import { combineReducers } from 'redux'
import { increase, decrease, todoList } from '../actions'

const initialState = {
    count: 0,
}

const todoIniState = {
    value: '',
    text: []
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case increase:
            return {
                ...state,
                count: state.count + action.num
            }
        case decrease:
            return {
                ...state,
                count: state.count - action.num
            }
        default:
            return state
    }
}

const todoReducers = (state = todoIniState, action) => {
    switch(action.type){
        case todoList:
            return {
                ...state, 
                value: action.list.value,
                text: action.list.text || state.text
            }
        default:
            return state
    }
}

const calApp = combineReducers({
    reducers,
    todoReducers
}) 

export default calApp