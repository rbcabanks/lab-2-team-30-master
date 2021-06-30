import React, {Component,useState} from "react";
import users from "./users.json";

class Search extends Component {
    constructor(props) {
    super(props)
    this.state={users:users};
    }
    renderTableData() {
        return this.state.users.map((user, index) => {
            const {id, name, email, phone, address } = user 
            return (
              <tr key={id}>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phone}</td>
                 <td>{address.city}</td>
              </tr>
           )
        })
    }
    render(){
    return(
        <div>
            <div className="top">
                <h1>User Search Application</h1>
                <h3>Search by name or city</h3>
                <input type="text" id="input" placeholder="Search for a name or city.."></input>
                <button class="button button1">Search</button>
            </div>
            <div className="Sort"> 
            <button id="sorter" class="button button2" onClick="renderTableDataSort()">Sort By City</button>
            </div>
        </div>
    )
}
}   
export default Search;