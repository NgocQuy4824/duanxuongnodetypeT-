import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Iproduct } from '../interface/product';

interface ICartItem {
    product: Iproduct;
    quantity: number;
    item: number | string;
}

const Cart = () => {
    const [products, setProducts] = useState<ICartItem[]>([]);

    const addToCart = (product: Iproduct) => {
        const existingItemIndex = products.findIndex(item => item.product._id === product._id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...products];
            updatedCartItems[existingItemIndex].quantity++;
            setProducts(updatedCartItems);
        // } else {
        //     setProducts([...products, { product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: string) => {
        const updatedCartItems = products.filter(item => item.product._id !== productId);
        setProducts(updatedCartItems);
    };

    const totalItems = products.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = products.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    return (
        <>
            <h1>Giỏ Hàng</h1>
            <p>Tổng số lượng: {totalItems}</p>
            <p>Tổng giá: {totalPrice}</p>
            <Link to="/admin/checkout" className="btn btn-primary">Thanh Toán</Link>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Số Thứ Tự</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Gía Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Thành Tiền</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price * item.quantity}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.product._id)}>Xóa</button>     
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
};

export default Cart;
