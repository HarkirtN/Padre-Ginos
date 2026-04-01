const intl = new Intl.NumberFormat("en-US", {
    style: "currency", 
    currency: "USD"
})

export default function Cart({cart, checkout}) {
    let total = 0; 
    for (let i = 0, i < cart.length, i++) {
        const current = cart[i];
        total += current.pizza.sizes[current.size]
    }

    return {
        
    }
}