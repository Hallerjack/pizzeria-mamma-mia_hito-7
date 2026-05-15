import { useState, useEffect } from "react";
import { formatNumber } from "../utils/formatNumber";

const Pizza = () => {
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        const getPizza = async () => {
            const res = await fetch("http://localhost:5000/api/pizzas/p001");
            const data = await res.json();
            setPizza(data);
        };
        getPizza();
    }, []);

    return (
        <div className="pizza-container">
            {pizza.name ? (
                <div className="pizza-card">
                    <img src={pizza.img} alt={pizza.name} width="300" />
                    <div>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.desc}</p>
                        <h4>Ingredientes:</h4>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3>Precio: ${formatNumber(pizza.price)}</h3>
                        <button>Añadir</button>
                    </div>
                </div>
            ) : (
                <p>Cargando pizza...</p>
            )}
        </div>
    );
};

export default Pizza;