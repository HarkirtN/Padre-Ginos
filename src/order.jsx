import Pizza from "./pizza";

export default function order() {
const pizzaType = "pepperoni";
const pizzaSize = "m";
return (
    <div className="order">
        <h2>Creat your order </h2>
        <form> 
            <div> 
                <div>
                    <label htmlFor="pizza-type">Pizza Type </label>
                    <select name="pizza-type" value={pizzaType}>
                        <option value="pepperoni"> Pepperoni pizza </option>
                        <option value="hawaiian"> Hawaiian pizza </option>
                        <option value="Hamncheese"> Ham n chesse pizza </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pizza-size"> Pizza Size </label>
                    <div>
                        <span> 
                            <input checked={pizzaSize === "s"} type="radio" name="pizza-size" value="s" id="pizza-s"/>
                            <label htmlFor="pizza-s"> Small </label>
                        </span>
                        <span>
                            <input checked= {pizzaSize === "m"} type="radio" name="pizza-size" value="m" id="pizza-m" />
                            <label htmlFor="pizza-m"> Medium </label>
                        </span>
                        <span>
                            <input checked={pizzaSize === "l"} type="radio" name="pizza-size" value="l" id="pizza-l" />
                            <label htmlFor="pizza-l"> Large </label>
                        </span>
                    </div>
                </div>
                <button type="submit"> Add to cart </button>
            </div>
            <div className="order-pizza">
                <Pizza 
                name="Pepperoni" 
                decription="pepperoni, cheese and tomato base"
                image= "/public/pizzas/pepperoni.webp" />
                <p> $15.30 </p>
            </div>
        </form>
    </div>
)
}