const intl = new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD"
})

export default function Cart({cart, checkout}) {
    let total = 0; 
    for (let i = 0; i < cart.length; i++) {
        const current = cart[i];
        total += current.pizza.sizes[current.size];
    };
    // loop through the cart items and add each pizza's price = size to runnung total 

    return (
        <div className="cart"> 
        <h2> Cart </h2>
        <ul>
        {cart.map((item, index) => (
            <li>
                <span className="size">{item.size}</span>
                <span className="type">{item.name}</span>
                <span className="price">{item.price}</span>
            </li>
        ))}
        
        </ul>
        <p>Total: {intl.format(total)}</p>
        <button onClick={checkout}> Checkout </button>
        </div>
    );
}

// '...' spread operators are used to create a new array by spreading the elements and adding a new element in the end 
// onSubmit handles mouse and keyboard events as opposed which is good for forms 
// only use index as key when items are not guranteed to be unique, like if there's multiple items in a list
