import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const shopData = [
    {no: 1, title: '商品1', price: '200', quantity: '1', url: ''},
    {no: 2, title: '商品2', price: '200', quantity: '1', url: ''},
    {no: 3, title: '商品3', price: '200', quantity: '1', url: ''},
    {no: 4, title: '商品4', price: '200', quantity: '1', url: ''},
    {no: 5, title: '商品5', price: '200', quantity: '1', url: ''},
    {no: 6, title: '商品6', price: '200', quantity: '1', url: ''},
    {no: 7, title: '商品7', price: '200', quantity: '1', url: ''},
    {no: 8, title: '商品8', price: '200', quantity: '1', url: ''},
    {no: 9, title: '商品9', price: '200', quantity: '1', url: ''},
    {no: 10, title: '商品10', price: '200', quantity: '1', url: ''},
    {no: 11, title: '商品11', price: '200', quantity: '1', url: ''}
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
            this.props.getQ(this.state.quantity + 1)
        } else {
            if(this.state.quantity === 0) return
            this.setState({quantity: this.state.quantity - 1})
            this.props.getQ(this.state.quantity - 1)
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

class Items extends Component{
    constructor(props) {
        super(props)
        this.state = {
           value: 0
        }
    }
    getQ(quantity){
        this.setState({
            value: quantity
        })
    }
    setData(item) {
        console.log(this.state.value)
        if(this.state.value === 0) return
        let info = {
            no: item.no,
            url: item.url,
            title: item.title,
            price: item.price,
            quantity: this.state.value,
            sum: Number(item.price) * Number(this.state.value)
        }
        this.props.setShoppingCart(info)
    }
    render() {
        return (
            this.props.shopData.map((item, index) => {
                return (
                    <li key={item.no}>
                        <div className="productPic">
                            <img src={item.url}/>
                        </div>
                        <p className="productTitle">{item.title}</p>
                        <p className="productPrice">{item.price}</p>
                        <Quantity getQ={this.getQ.bind(this)}/>
                        <button className="productBtn" onClick={this.setData.bind(this, item)}>加入購物車</button>
                    </li>
                )
            })
        )
    }
}

class CartItem extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            this.props.itemInfo.map((item, index) => {
                return(
                    <tr key={index}>
                        <td><img src={item.url}/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.sum}</td>
                        <td>X</td>
                    </tr>
                )
            })
        )
    }
}

class Cart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    }
    render() {
        console.log(this.props.shoppingData)
        if(this.props.shoppingData.length === 0) {
            return (
                <div></div>
            )
        } else {
            return(
                <div className="shoppingCart">
                    <table className="shopContent">
                        <tr>
                            <th>商品圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>小計</th>
                            <th>刪除</th>
                        </tr>
                         <CartItem itemInfo={this.props.shoppingData}/>
                    </table>
                    <div className="shopTotal">
                        <span>總金額:{this.state.total}</span>
                    </div>
                </div> 
             )
        }
    }
}
class shopping extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOption: [],
            shoppingCart: []
        }
    }
    setShoppingCart(item) {
        console.log('item', item)
        if(this.state.isOption.indexOf(item.no) !== -1) {
            const index = this.state.isOption.indexOf(item.no)
            let list = this.state.shoppingCart

            // 修改價格跟數量
            list[index].quantity = Number(list[index].quantity) + Number(item.quantity)
            list[index].sum = Number(list[index].quantity) * Number(item.price)
            console.log('XXXXXXXXXXXXx', list)
            this.setState({
                shoppingCart: list
            })
        } else {
            const isOptionArr = [...this.state.isOption, item.no]
            const itemArr = [...this.state.shoppingCart, item]
            this.setState({
                isOption: isOptionArr,
                shoppingCart: itemArr
            })
        }
        // console.log('bbb', this.state.isOption)
        // console.log('aaa', this.state.shoppingCart)
    }
    render() {
        return(
            <div className="shopping">
                <div className="shoppingNav">
                    <div className="shoppingNavWrap">
                        <input />
                        <div class="shoppingCartWrap">
                            <FontAwesomeIcon icon="shopping-cart" />
                            <p>0</p>
                            <Cart shoppingData={this.state.shoppingCart}/>
                        </div>
                    </div>
                </div>
                <ul className="contentWrap">
                    <Items shopData={shopData} setShoppingCart={this.setShoppingCart.bind(this)}/>
                </ul>
            </div>
        )
    }
}

export default shopping