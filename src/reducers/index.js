import { combineReducers } from 'redux'
import { increase, decrease } from '../actions'

const initialState = {
    count: 0
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case increase:
            return Object.assign({}, state, {
                count: state.count + action.num
            })
        case decrease:
            return Object.assign({}, state, {
                count: state.count - action.num
            })
        default:
            return state
    }
}

const calApp = combineReducers({
    reducers
}) 

export default calApp