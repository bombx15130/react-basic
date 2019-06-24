import React, { Component } from 'react'

class Quantity extends Component{
    constructor(props){
        super(props)
        this.state={
            quantity: this.props.productQ
        }
    }
    decrease = () => {
        if(this.state.quantity === 1) return
        this.setState(preState => (
            {quantity: preState.quantity - 1}
        ), () => {
            this.props.getQ(this.state.quantity)
        })
    }
    increase = () => {
        this.setState(preState => (
            {quantity: preState.quantity + 1}
        ), () => {
            this.props.getQ(this.state.quantity)
        })
    }
    // sendData = () => {
    //     this.setState({
    //         value: this.refs.itemQ.value
    //     },() => {
    //         this.props.getQ(this.state.quantity)
    //     })
    // }
    render() {
        return (
            <div className="productQuantity">
                <button onClick={this.decrease}>-</button>
                <input type="text" value={this.state.quantity} readOnly/>
                {/* <input type="text" value={this.state.quantity} ref="itemQ" onChange={this.sendData}/> */}
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Quantity