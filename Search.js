import { useScrollTrigger } from "@material-ui/core";
import { getElementError } from "@testing-library/react";
import React, {Component} from "react";
import users from "./users.json";

    class Search extends Component {
    state = {};
    render() {
        return(
    <div>
        <div className="top">
            <h1>User Search Application</h1>
            <h3>Search by name or city</h3>
            <input name="text" type="text" placeholder="Search" />
            <button class="button button1">Search</button>
        </div>
            <div className="Sort"> 
            <button class="button button2">Sort By City</button>
            </div>

            <div className="Container">
            {users.map((item) => (<Card {...item} key={item.name} />
            ))}
            </div>
    </div>
        );
    }
}
const Card = ({name, email, phone, address}) => {
    return (
        <div className="Individuals">
            <div className="Header">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
                <h2>City: {address.city}</h2>
                </div>
        </div>
    );
};
export default Search;
