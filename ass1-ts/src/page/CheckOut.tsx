// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useShoppingContext } from "../contexts/ShoppingContext"
import { formatCurrency } from "../helpers/commons";



const CheckOut = () => {
    const navitage = useNavigate()
    const { cartItems, totalPrice, decreaseQuantily, increaseQuantily, removeCartItem , clearCart} = useShoppingContext();
    return (
        <div className="container">
            <div className="row">
                <h3>Check Out</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Mô Tả</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => {
                            return (
                                <tr key={item._id}>
                                    <td><img src="https://picsum.photos/id/237/300/100" alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{formatCurrency(item.price)}</td>
                                    <td>
                                    <button type="button" className="btn btn-sm btn-primary ms-4 me-1" onClick={() => decreaseQuantily(item._id)}><strong>-</strong></button>
                                    <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQuantily(item._id)}><strong>+</strong></button>
                                    </td>
                                    <td>
                                        {formatCurrency(item.price * item.quantily)}
                                    </td>
                                    <td>
                                    <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(item._id)}><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="col-md-12">
                    <span className="float-end me-2"><strong>total {formatCurrency(totalPrice)}</strong></span>
                </div>
                <div className="col-md-12 mt-5">
                    <Link to={`/dashboard`} className="btn btn-sm btn-primary float-start">Tiếp Tục Mua Hàng</Link>
                    <button className="btn btn-sm btn-success float-end me-2 d-block" onClick={() =>{
                        clearCart()
                        navitage(`/shoppage`)
                    }}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut