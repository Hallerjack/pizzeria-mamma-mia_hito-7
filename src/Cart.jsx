import { useState } from "react";
import { pizzaCart } from "./pizzas";
import { formatNumber } from "./utils/formatNumber";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

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

    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div className="cart-container">
            <h2>Detalles del pedido:</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} width="50" />
                    <p>{item.name}</p>
                    <p>{formatNumber(item.price)}</p>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p>{item.count}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
            ))}
            <h3>Total: {formatNumber(total)}</h3>
            <button>Pagar</button>
        </div>
    );
};

export default Cart;