import { ReactNode, createContext, useContext, useEffect, useState } from 'react'


type ShoppingContextProviderProps = {
    children: ReactNode
}

type CartItem = {
    _id: number | string
    name: string
    price: number
    quantily: number
    thumbnail: string
}
type ProductItem = {
    _id: number | string
    name: string
    price: number
    thumbnail: string
}
interface ShoppingContextType {
    cartQuantily: number
    totalPrice: number
    cartItems: CartItem[]
    increaseQuantily: (id: number | string) => void
    decreaseQuantily: (id: number | string) => void
    addCartItem: (item: ProductItem) => void
    removeCartItem: (id: number | string) => void
    clearCart: () => void
}
const ShoppingContext = createContext<ShoppingContextType>({} as ShoppingContextType)

export const useShoppingContext = () => {
    return useContext(ShoppingContext)
}

export const ShoppingContextProvider = ({ children }: ShoppingContextProviderProps) => {
    //đoạn này là khi người dùng mua hàng sau khi refresh lại thì trong giot hàng sẽ k bị mất đi 
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const cartRaw = localStorage.getItem("shoping_cart")
        const cartJson = cartRaw ? JSON.parse(cartRaw) : []
        return cartJson
    })
    //đoạn này lưu vào local storage
    useEffect(() => {
        const cartsRaw = JSON.stringify(cartItems)
        localStorage.setItem('shopingcart', cartsRaw)
    }, [cartItems])

    const cartQuantily = cartItems.reduce((quantily, item) => quantily + item.quantily, 0)
    const totalPrice = cartItems.reduce((total, item) => total + item.quantily * item.price, 0)

    const increaseQuantily = (id: number | string) => {
        console.log("increaseQuantily=>", id)
        const currentCartItem = cartItems.find(item => item._id === id)
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item._id === id) {
                    return { ...item, quantily: item.quantily + 1 }
                } else {
                    return item
                }
            })
            setCartItems(newItems)
        }
    }
    // giảm số lượng
    const decreaseQuantily = (id: number | string) => {
        console.log("decreaseQuantily=>", id)
        const currentCartItem = cartItems.find(item => item._id === id)
        if (currentCartItem) {
            if (currentCartItem.quantily == 1) {
                removeCartItem(id)
            }else{
                const newItems = cartItems.map(item => {
                    if (item._id === id) {
                        return { ...item, quantily: item.quantily - 1 }
                    } else {
                        return item
                    }
                })
                setCartItems(newItems)
            }      
        }
    }
    //thêm sản phẩm vào giỏ hàng
    const addCartItem = (product: ProductItem) => {
        console.log("product=>", product)
        if (product) {
            const currentCartItem = cartItems.find(item => item._id === product._id)
            if (currentCartItem) {
                const newItems = cartItems.map(item => {
                    if (item._id === product._id) {
                        return { ...item, quantily: item.quantily + 1 }
                    } else {
                        return item
                    }
                })
                setCartItems(newItems)
            } else {
                const newItem = { ...product, quantily: 1 }
                setCartItems([...cartItems, newItem])
            }
        }
    }

    const removeCartItem = (id: number | string) => {
        console.log("removeCartItem=>", id)
        const currentCartItemIndex = cartItems.findIndex(item => item._id === id)
        const newItems = [...cartItems]
        newItems.splice(currentCartItemIndex, 1)
        setCartItems(newItems)
    }

    const clearCart = () => {
        console.log("clearCart=>")
        setCartItems([])
    }

    return (
        <ShoppingContext.Provider value={{ cartItems, cartQuantily, totalPrice, increaseQuantily, decreaseQuantily, addCartItem, removeCartItem, clearCart }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingContext