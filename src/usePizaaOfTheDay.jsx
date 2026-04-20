import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfThheDay] = useState(null);

    useEffect (() => {
        async function fetchPizzaOfTheDay() {
            const response = await fetch("/api.pizza-of-the-day");
            const data = await response.json();
            setPizzaOfThheDay(data);
        }

        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
};

// custom hook is a function that calls other hooks with 'use' at the front 
// reuses stateful logic hooks across other components 
// custom hooks use useState and useEffect