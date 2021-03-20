import React, { Component } from "react";
import UserItem from "./UserItem";


class Users extends Component {
editdata =(edituser)=>{
    this.props.editUser(edituser)
}
  renderTable=()=>{
        return(this.props.dataUser.map((item,i)=>{
          return(
              <UserItem dataUser={item} key={i} editdata={this.editdata} deteleItem={(user)=>{this.props.deleteItem(user)}}/>
          )
        }))
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
           {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
