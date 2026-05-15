import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const Pizza = () => {
    const [pizza, setPizza] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getPizza = async () => {
            const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
            const data = await res.json();
            setPizza(data);
        };
        getPizza();
    }, [id]);

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