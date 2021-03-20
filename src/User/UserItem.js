import { data } from "jquery";
import React, { Component } from "react";

class UserItem extends Component {
  render() {

    const {dataUser} =this.props;
    return (
      <tr>
        <td>{dataUser.name}</td>
        <td>{dataUser.username}</td>
        <td>{dataUser.email}</td>
        <td>{dataUser.phoneNumber}</td>
        <td>{dataUser.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={()=>{this.props.editdata(dataUser)}}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{this.props.deteleItem(dataUser)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
