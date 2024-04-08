

import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/commons'

type CartItem = {
    _id: number | string
    name: string
    price: number
    quantily: number
    thumbnail: string
}
const CartTable = () => {
    const { cartItems, increaseQuantily, decreaseQuantily, removeCartItem, totalPrice } = useShoppingContext()
    console.log(cartItems);

    return (
        <div className='container'>
            <table className="table table-hover">
                <h1 >Thông Tin Giỏ Hàng</h1>
                <tbody>
                    {cartItems.map(({ _id, name, price, quantily, }: CartItem) => (
                        <tr key={_id}>
                            <img src="https://picsum.photos/id/237/300/100" alt="" />
                            <td><span className="item-name">{name}</span></td>
                            <td><span className="item-quantity">{formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {quantily}</span>
                                <button type="button" className="btn btn-sm btn-primary ms-4 me-1" onClick={() => decreaseQuantily(_id)}><strong>-</strong></button>
                                <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQuantily(_id)}><strong>+</strong></button>
                            </td>
                            <td><span className="item-price">{formatCurrency(quantily * price)}</span></td>
                            <td>
                                <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(_id)}><i className="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <div>
                    <th>
                        <span className="float-start ms-2"><strong>Total: {formatCurrency(totalPrice)}</strong></span>
                        <span></span>
                    </th>
                </div>
            </table>
        </div>

    )
}

export default CartTable