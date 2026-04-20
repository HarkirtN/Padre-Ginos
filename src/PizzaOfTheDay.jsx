import { usePizzaOfTheDay } from './usePizzaOfTheDay';

const Intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
})

const PizzaOfTheDay = () => {
    const pizzaOfTheDay = usePizzaOfTheDay();

    if (!pizzaOfTheDay) {
        return <div> Loading ...</div>;
    }

    return (
        <div className='pizza-of-the-day'>
            <h2>Pizza of the day </h2>
            <div>
                <div className='pizza-of-the-day-info'>
                    <h3> {pizzaOfTheDay.name}</h3>
                    <p>{pizzaOfTheDay.decription}</p>
                    <p className='pizza-of-the-day-price'>
                        From: <span> {intl.format(pizzaOfTheDay.sizes.s)}</span>
                    </p>
                </div>
                <img 
                className='pizza-of-the-day-image'
                src={pizzaOfTheDay.image}
                alt={pizzaOfTheDay.name}
                />
            </div>
        </div>
    );
};

export default PizzaOfTheDay;
