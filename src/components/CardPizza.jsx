import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ pizza, onAdd }) => {
    return (
        <div id='product-card'>
            <div id='head-product'>
                <img id='product-img' src={pizza.img} alt={pizza.name}></img>
                <h3>{pizza.name}</h3>
                <h4>Ingredientes:</h4>
                <ul>
                    {pizza.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h4>Precio: {formatNumber(pizza.price)}</h4>
            </div>
            <div id='footer-product'>
                <Link to={`/pizza/${pizza.id}`}>
                    <button>Ver más</button>
                </Link>
                <button onClick={() => onAdd(pizza)}>Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;