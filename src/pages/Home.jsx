import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
    const { pizzas } = useContext(PizzaContext);
    const { addToCart } = useContext(CartContext);

    return (
        <div id='home'>
            <Header />
            <div id='pizzas-container'>
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        pizza={pizza}
                        onAdd={addToCart}
                    />
                ))}
            </div>
        </div>
    )  
};

export default Home