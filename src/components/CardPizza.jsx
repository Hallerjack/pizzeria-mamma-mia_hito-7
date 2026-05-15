import { formatNumber } from "../utils/formatNumber";

const CardPizza = (pizza) => {
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
                <button>Ver más</button>
                <button>Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;