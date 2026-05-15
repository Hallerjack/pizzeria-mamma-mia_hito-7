import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
    };

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;