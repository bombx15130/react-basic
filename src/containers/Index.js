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

class ShopItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
           value: 1           
        }
    }
    getQ = (quantity) => {
        this.setState({
            value: quantity
        })
    }
    setData = () => {
        console.log('XXXXXXXx', this.state.value)
        let info = {
            no: this.props.shopNo,
            url: this.props.picUrl,
            title: this.props.shopTitle,
            price: this.props.shopPrice,
            quantity: this.state.value,
            sum: Number(this.props.shopPrice) * Number(this.state.value)
        }
        this.props.passShopInfo(info)
    }
    render() {
        return (
            <li>
                <div className="productPic">
                    <img src={this.props.picUrl}/>
                </div>
                <p className="productTitle">{this.props.shopTitle}</p>
                <p className="productPrice">{this.props.shopPrice}</p>
                <Quantity getQ={this.getQ} productQ={this.state.value}/>
                <button className="productBtn" onClick={this.setData}>加入購物車</button>
            </li>
        )
    }
}
class Items extends Component{
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        console.log(this.props.shopData)
        return (
            
            this.props.shopData.map((item, index) => {
                return (
                    <ShopItem
                        key={item.no}
                        shopNo={item.no}
                        picUrl={item.url}
                        shopTitle={item.title}
                        shopPrice={item.price}
                        passShopInfo={this.props.setShoppingCart}
                    />
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
                        <td>${item.price}</td>
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
        if(this.props.shoppingData.length === 0) {
            return (
                <div></div>
            )
        } else {
            // 計算總金額
            const data = this.props.shoppingData
            let total = 0
            for (let i = 0; i < data.length; i++) {
                total = total + Number(data[i].sum)
            }

            return(
                <div className="shoppingCart">
                    <table className="shopContent">
                        <thead>
                            <tr>
                                <th>商品圖片</th>
                                <th>商品名稱</th>
                                <th>價格</th>
                                <th>數量</th>
                                <th>小計</th>
                                <th>刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem itemInfo={this.props.shoppingData}/>
                        </tbody>
                    </table>
                    <div className="shopTotal">
                        <span>總金額:{total}</span>
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
            this.setState({
                shoppingCart: list
            })
        } else {
            const isOptionArr = [...this.state.isOption, item.no]
            const itemArr = [...this.state.shoppingCart, item]
            this.setState({
                isOption: isOptionArr,
                shoppingCart: itemArr
            },)
        }
    }
    render() {
        return(
            <div className="shopping">
                <div className="shoppingNav">
                    <div className="shoppingNavWrap">
                        <input />
                        <div className="shoppingCartWrap">
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