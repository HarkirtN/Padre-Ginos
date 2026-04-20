import { useContext } from "react";
import { cartContext } from "./contexts";
import { Link } from "@tanstack/react-router";

export default function Header () {

    const [cart ] = useContext(cartContext);

    return (
        <nav>
        <Link>
        <h1 className="logo"> Padre Gino's Pizza </h1>
        </Link>
        <div className="nav-cart">
        <span className="nav-cart-number">(cart.length)</span>
        </div>
        </nav>
    );
}