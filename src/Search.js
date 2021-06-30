import React, {Component} from "react";
import users from "./users.json";

class Search extends React.Component {
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
            <button id="sorter" class="button button2">Sort By City</button>
            </div>
            <table id="userTable">
            <tr class="header">
                <th>Name</th>
                <th>Email</th> 
                <th>Phone</th>
                <th>City</th>
            </tr>   
            <tbody>
            {this.renderTableData()}</tbody>
            </table>

        </div>
        
        )
    }
}
export default Search;