import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/') ({
    component: Index,
});

function Index() {
    return (
        <div className="index">
            <div className="index-brand">
                <h1>Padre Gino's Pizza</h1>
                <p> Pizza & Art mixed into one </p>
            </div>
            <ul>
                <li>
                    <Link to="/order"> Order </Link>
                </li>
                <li>
                    <Link to="/past"> Past Order </Link>
                </li>
            </ul>
        </div>
    )
}

//lazy loading means that itll only load once the user click or does something with the event 
// link components are like <a> tags can route thingsc lient side, manage browser hx
// and prevent full page loading 