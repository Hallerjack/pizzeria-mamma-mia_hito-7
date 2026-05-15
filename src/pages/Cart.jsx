import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
    const { token } = useContext(UserContext);

    return (
        <div className="cart-container">
            <h2>Detalles del pedido:</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt={item.name} width="50" />
                        <p>{item.name}</p>
                        <p>{formatNumber(item.price)}</p>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <p>{item.count}</p>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                ))
            )}
            <h3>Total: {formatNumber(total)}</h3>
            <button disabled={!token || cart.length === 0}>Pagar</button>
        </div>
    );
};

export default Cart;