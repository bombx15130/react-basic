import React, { Component} from 'react'

// const cal = ({count, onClickIn, onClickDe}) => {
//     return (
//         <div>
//             <button onClick={()=> onClickIn() }>+</button>
//             {count}
//             <button onClick={() => onClickDe() }>-</button>
//         </div>
//     )
// }


class cal extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClickIn }>+</button>
                {this.props.count}
                <button onClick={this.props.onClickDe }>-</button>
            </div>
        )
    }
}

export default cal