import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Quantity from './Counter'
import Cart from './ShoppingCart'
import img1 from '../../assets/product1.jpg'
import img2 from '../../assets/product2.jpg'
import img3 from '../../assets/product3.jpg'
import img4 from '../../assets/product4.jpg'
import img5 from '../../assets/product5.jpg'
import img6 from '../../assets/product6.jpg'
import img7 from '../../assets/product7.jpg'
import img8 from '../../assets/product8.jpg'
import img9 from '../../assets/product9.jpg'
import img10 from '../../assets/product10.jpg'
import img11 from '../../assets/product11.jpg'
import logo from '../../assets/logo.png'

const shopData = [
    {no: 1, title: '商品1', price: '450', quantity: '1', url: img1 },
    {no: 2, title: '商品2', price: '300', quantity: '1', url: img2 },
    {no: 3, title: '商品3', price: '500', quantity: '1', url: img3 },
    {no: 4, title: '商品4', price: '750', quantity: '1', url: img4 },
    {no: 5, title: '商品5', price: '450', quantity: '1', url: img5 },
    {no: 6, title: '商品6', price: '810', quantity: '1', url: img6 },
    {no: 7, title: '商品7', price: '430', quantity: '1', url: img7 },
    {no: 8, title: '商品8', price: '560', quantity: '1', url: img8 },
    {no: 9, title: '商品9', price: '730', quantity: '1', url: img9 },
    {no: 10, title: '商品10', price: '999', quantity: '1', url: img10 },
    {no: 11, title: '商品11', price: '899', quantity: '1', url: img11 }
]



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

class shopping extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOption: [],
            shoppingCart: [],
            countItem: 0,
            isShow: false
        }
    }
    show = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    delItem = (index) => {
        const newIsOption = this.state.isOption
        const newShoppingCart = this.state.shoppingCart
        newIsOption.splice(index, 1)
        newShoppingCart.splice(index, 1)
        this.setState({
            isOption: newIsOption,
            shoppingCart: newShoppingCart,
            countItem: newShoppingCart.length
        })

    }
    setShoppingCart(item) {
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
            const countItem = itemArr.length
            this.setState({
                isOption: isOptionArr,
                shoppingCart: itemArr,
                countItem: countItem
            },)
        }
    }
    render() {
        return(
            <div className="shopping">
                <div className="shoppingNav">
                    <div className="shoppingNavWrap">
                        <div className="logo">
                            <img src={logo}></img>
                        </div>
                        {/* <input /> */}
                        <div className="shoppingCartWrap">
                            <FontAwesomeIcon icon="shopping-cart" onClick={this.show} className="cart-icon"/>
                            <p>{this.state.countItem}</p>
                            <Cart shoppingData={this.state.shoppingCart} delItem={this.delItem} isShow={this.state.isShow}/>
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