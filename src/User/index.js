import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from './data.json'
export default class Index extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      dataUser: data,
      editdata:{},
      status:false,
      searchFi:'',
    }

  }
  deleteItem=(deleteItem)=>{
    let vitri = this.findIndex(deleteItem.username);
    let dataDetele =[...this.state.dataUser];
    dataDetele.splice(vitri,1);
    this.setState({dataUser:[...dataDetele]})
  }
  clearEdit= async()=>{
  
    await this.setState({editdata:''});
    console.log("clear edit ",this.state.editdata);
  }
  addUser = ()=>{
     this.setState({editdata:''});
  }
  findIndex =(username)=>{
       return(this.state.dataUser.findIndex((item)=>{
            return item.username === username
       }))
  }
  recidata =async(data)=>{
    

      let location = await this.findIndex(this.state.editdata.username);
    if(this.state.editdata!=='')
    {
    let data1 = [...this.state.dataUser]
     console.log(data)
     console.log(this.state.editdata.name);
    
      data1[location].username=data.username;
      data1[location].name = data.name;
      data1[location].username = data.username;
      data1[location].email = data.email;
      data1[location].phoneNumber = data.phoneNumber;
      data1[location].type = data.type;
  
    this.setState({dataUser: [...data1],editdata:''});
    } 
    else
    {
      let data1 = [...this.state.dataUser,data]
     this.setState({dataUser: [...data1]});
    }
    
  }
  onchangeSer =(event)=>{
       this.setState({searchFi:event.target.value});
       console.log(this.state.searchFi);
  }
  editUser= async (dataedit)=>{
  await this.setState({editdata:dataedit});

  }
  render() {
    const serfi= this.state.dataUser.filter((item)=>{ 
      return item.name.toLowerCase().includes(this.state.searchFi.toLowerCase()) })
    return (
      
      <div className="container d-block">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search onchangeSer={this.onchangeSer}/>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick= {this.addUser}
          >
            Add User
          </button>
        </div>
        <Users dataUser={serfi} editUser={this.editUser} deleteItem={(deleteUser)=>{ this.deleteItem(deleteUser)}}/>
        <Modal sendEditdata={this.state.editdata}  recidata={this.recidata} clearEdit={this.clearEdit}/>
      </div>
    );
  }
}

