import { useState } from "react";
import {  createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../pizzaOfTheDay";
import Header from "../Header";
import { cartContext } from "../contexts";

export const Route = createRootRoute({
    component: () => {
        const cartHook = useState([]);
        return (
            <>
             <cartContext.Provider value={cartHook}>
                <div>
                  <Header />
                    < Outlet />
                    <PizzaOfTheDay />
                </div>
                </cartContext.Provider>
                <TanStackRouterDevtools />
                </>
        );
    },
});

//useeffect is helpful interacting with local storage, handling side effects that don;t 
// invovle API fetching 
// query is cleaner handling, with custom hooks and API requests management of react components 

