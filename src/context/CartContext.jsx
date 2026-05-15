import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const foundIndex = cart.findIndex((item) => item.id === pizza.id);
        if (foundIndex >= 0) {
            const newCart = [...cart];
            newCart[foundIndex].count++;
            setCart(newCart);
        } else {
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        const newCart = cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCart(newCart);
    };

    const decreaseQuantity = (id) => {
        const newCart = cart
            .map((item) =>
                item.id === id ? { ...item, count: item.count - 1 } : item
            )
            .filter((item) => item.count > 0);
        setCart(newCart);
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.count, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                total: calculateTotal(),
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;