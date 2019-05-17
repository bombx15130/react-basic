import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const shopData = [
    {title: '商品1', price: '$200', quantity: '1', url: ''},
    {title: '商品2', price: '$200', quantity: '1', url: ''},
    {title: '商品3', price: '$200', quantity: '1', url: ''},
    {title: '商品4', price: '$200', quantity: '1', url: ''},
    {title: '商品5', price: '$200', quantity: '1', url: ''},
    {title: '商品6', price: '$200', quantity: '1', url: ''},
    {title: '商品7', price: '$200', quantity: '1', url: ''},
    {title: '商品8', price: '$200', quantity: '1', url: ''},
    {title: '商品9', price: '$200', quantity: '1', url: ''},
    {title: '商品10', price: '$200', quantity: '1', url: ''},
    {title: '商品11', price: '$200', quantity: '1', url: ''}
]

class Quantity extends Component{
    constructor(props){
        super(props)
        this.state={
            quantity: 0
        }
        this.cal = this.cal.bind(this)
    }
    cal(symbol){
        if(symbol === '+'){
            this.setState({quantity: this.state.quantity + 1})
        } else {
            if(this.state.quantity === 0) return
            this.setState({quantity: this.state.quantity - 1})
        }
    }
    render() {
        return (
            <div className="productQuantity">
                <button onClick={this.cal.bind(this, '-')}>-</button>
                <input type="text" value={this.state.quantity}/>
                <button onClick={this.cal.bind(this, '+')}>+</button>
            </div>
        )
    }
}

function Items(props){
    return (
        props.shopData.map((item, index) => {
            return (
                <li key={index}>
                    <div className="productPic">
                        <img src={item.url}/>
                    </div>
                    <p className="productTitle">{item.title}</p>
                    <p className="productPrice">{item.price}</p>
                    <Quantity/>
                    <button className="productBtn">加入購物車</button>
                </li>
            )
        })
    )
}

class shoppingCart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return(
            <div className="shopping">
                <div className="shoppingNav">
                    <div className="shoppingNavWrap">
                        <input />
                        <div>
                            <FontAwesomeIcon icon="shopping-cart" />
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <ul className="contentWrap">
                    <Items shopData={shopData}/>
                </ul>
            </div>
        )
    }
}

export default shoppingCart