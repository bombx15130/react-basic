import { connect } from 'react-redux'
import Cal from '../components/Cal'
import { plus, minus } from '../actions'

// class Clock extends Component{
//     constructor(props){
//         super(props)
//         this.add = this.add.bind(this)
//         this.decrease = this.decrease.bind(this)
//     }
//     add() {
//         // console.log('111')
//         // this.setState(state => ({count: state.count += 1}))
//         this.props.dispatch({type: 'ADD_COUNT'})
//     }
//     decrease() {
//         // this.setState(state => ({count: state.count -= 1}))
//         this.props.dispatch({type: 'DECREASE_COUNT'})
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={this.add}>+</button>
//                     {this.props.count}
//                 <button onClick={this.decrease}>-</button>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return{
        count:state.reducers.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onClickIn: () => {
            dispatch(plus())
        },
        onClickDe: () => {
            dispatch(minus())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cal)