import Cart from "../model/cart";
import products from "../model/products";
import user from "../model/user"
import { StatusCodes } from "http-status-codes"


export const getCartByUserId = async (req, res) => {
    // sử dụng phương thức get
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId }).populate("products.productId");
        const cartData = {
            products: cart.products.map((item) => ({
                productId: item.productId._id,
                name: item.productId.name,
                quantily: item.quantily,
            })),
        }

        return res.status(StatusCodes.OK).json({ products: cartData.products });
    } catch (error) {

    }
}
//thêm sản phẩm vào giỏ hàng
export const addItemToCart = async (req, res) => {
    const { userId, productId, quantily } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, productId: [] });
        }
        console.log(cart)
        const existProductIndex = cart.products.findIndex((item) => item.productId == productId);
        if (existProductIndex !== -1) {
            cart.products[existProductIndex].quantily += quantily;
        } else {
            cart.products.push({ productId, quantily });
        }
        await cart.save();
        return res.status(StatusCodes.OK).json({ cart });
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal server error" })
    }
};
//xóa sản phẩm ở giỏ hàng qua nút tăng giảm 
export const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart Not Found" })
        }
        cart.products = cart.products.filter((products) =>
            products.productId && products.productId.toString() !== productId
        );
        // đoạn này là lưu vào database
        await cart.save()
        return res.status(StatusCodes.OK).json({ message: "Xóa sản phẩm thành công " })
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Internal Server Error" })
    }
}
//tăng giảm số lượng 
export const updateProductQuantily = async (req, res) => {
    const { userId, productId, quantily } = req.body;
    try {
        let cart = await Cart.findOne({ userId })
        if (!cart) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Cart Not Found" })
        }

        const product = cart.products.find(item => item.productId.toString() === productId)
        if (!product) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Product not Found" })
        }
        product.quantily = quantily;
        await cart.save();
        return res.status(StatusCodes.OK).json({ cart })
    } catch (error) {

    }
}
