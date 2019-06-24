import React, { Component } from 'react'

class CartItem extends Component{
    constructor(props) {
        super(props)
    }
    delItem(index) {
        this.props.delItem(index)
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
                        <td>${item.sum}</td>
                        <td onClick={this.delItem.bind(this, index)} className="clear-btn">x</td>
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
        if(this.props.isShow) {
            if(this.props.shoppingData.length === 0) {
                return (
                    <div className="shoppingCart cart-initial">心動不如馬上行動</div>
                )
            } else {
                // 計算總金額
                const data = this.props.shoppingData
                let total = 0
                for (let i = 0; i < data.length; i++) {
                    total = total + Number(data[i].sum)
                }
    
                return(
                    <div>
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
                                    <CartItem itemInfo={this.props.shoppingData} delItem={this.props.delItem}/>
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="shopTotal">
                            <div className="shopTotalContent">
                                <span>結帳</span>
                                <span>${total}</span>
                            </div>
                        </div>
                    </div>
                    
                 )
            }
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Cart