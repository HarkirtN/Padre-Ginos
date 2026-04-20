import { useEffect, useState, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Pizza from "../pizza";
import Cart from "../Cart";
import { cartContext } from "../contexts";

export const Route = createLazyFileRoute("/order")({
  component: Order, 
});

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function Order() {
  //const pizzaType = "pepperoni";
  //const pizzaSize = "m";
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("m");
  const [Cart, setCart] = useContext(cartContext);
  const [loading, setLoading] = useState(true);

  async function checkout() { 
    setLoading (true);
// setLoading will stop from adding or removing items from cart when its in progress

    await fetch ("/api/order", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ cart }),
    })
     setCart([]);
     setLoading(false);
  }

  let price, selectedPizza;
  // price and selected pizza dont need to be hooks because they are derivatives of other hooks
  // price will alwys be dependent and found from pizzaSize 
  //selectedPizza will be dependent on pizzaType and pizzaTypes

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  };

  

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJSON = await pizzaRes.json;
    setPizzaTypes(pizzaJSON);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);
  //useEffect is used when you want to do something outside of the rerender. usually API requests
  // we want to fetch the pizzas once in the beggining so give it empty array as second argument 
  // if you give it no second argument it will re-render constantly because aync function is changing setPzzaTypes state => effect
  // add prevent default for 'onSubmit' to ensure it doesnt submit prematurely 

  return (
    <div className="order-page">
    <div className="order">
      <h2>Creat your order </h2>
      <form onSubmit={(e) => {e.preventDefault() 
        setCart([...cart, {pizza: selectedPizza, size: pizzaSize, price}])
      }}>

        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type </label>
            <select onChange={(event) => setPizzaType(event.target.value)} name="pizza-type" value={pizzaType}>
             {
                pizzaTypes.map((pizza) => (<option key={pizza.id} value={pizza.id} {pizza.name}
                ))} // turning an array of pizza types into an array of option on the screen using map
                // map in REACT converts of data objects to an array od REACT components/elements
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size"> Pizza Size </label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "s"}
                  type="radio"
                  name="pizza-size"
                  value="s"
                  id="pizza-s"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-s"> Small </label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "m"}
                  type="radio"
                  name="pizza-size"
                  value="m"
                  id="pizza-m"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-m"> Medium </label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "l"}
                  type="radio"
                  name="pizza-size"
                  value="l"
                  id="pizza-l"
                  onChange={(event) => setPizzaSize(event.target.value)}
                />
                <label htmlFor="pizza-l"> Large </label>
              </span>
            </div>
          </div>
          <button type="submit"> Add to cart </button>
        </div>
    
        { loading ? (
            <h3> Loading ... </h3>
        ) : (
        <div className="order-pizza">
          <Pizza
            name={selectedPizza.name}
            decription={selectedPizza.description}
            image={selectedPizza.image}
          />
          <p> {price} </p>
        </div> )} 
        // turnary operators are inline conditional statements 
        // starts as a boolean then returns a component or different values 
        // expression is a piece of code and part of line whereas statement is complete line of code that performs action
    
      </form>
      <div>
      {
        loading ? <h2> Loading ...</h2> : <Cart checkout={checkout} cart={cart} />
      }
    </div>
  );
}


//hook is function that allows the usestate features
//useState returns an array with current state value and function to update the state 
// do not use usestate in conditional statements and loops - should be top level 
//useState is called with a default value then returns an array of [currentstate, set-function] = useState 'deafault'