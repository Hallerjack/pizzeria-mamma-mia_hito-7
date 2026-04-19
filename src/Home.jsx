import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";

function Home() {
    return (
        <div id='home'>
            <Header />
            <div id='pizzas-container'>
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>
        </div>
    )  
};

export default Home