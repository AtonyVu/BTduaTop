import React, { Component } from "react";



class Modal extends Component {

  constructor(props)
  {
    
    super(props);
    this.local = {...this.props.sendEditdata};;
    this.data1='';
    this.state={
     
        name:this.local.name,
        username:'',
        email:'',
        phone:'',
        type:'',
        check:true,
      
    }
    
  }
  renderState =()=>{
    
  }
 
 submit = async()=>{

   let state={
     
    name:this.state.name,
    username:this.state.username,
    email:this.state.email,
    phoneNumber:this.state.phone,
    type:this.state.type,
  
}
if(state.name==''||state.username==''||state.email==''||state.phoneNumber==''||state.type=='')
 {
   alert("khong dc bo trong");
   return;
 }
  
      await this.props.recidata(state);
      this.state.name = ''
      this.state.username =  ''
      this.state.email =   ''
      this.state.phone =   ''
      this.state.type = ''
 
      
 }

render () {

    
    
    return (
      <div
        className="modal fade modall"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.clearEdit}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control"  value={this.state.username} onChange={(event)=>{this.setState({username:event.target.value,check:false})}}/>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value,check:false});}} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control"  value={this.state.email}  onChange={(event)=>{this.setState({email:event.target.value,check:false})}} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" value={this.state.phone}  onChange={(event)=>{this.setState({phone:event.target.value,check:false})}}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control"  value={this.state.type}  onChange={(event)=>{this.setState({type:event.target.value,check:false})}}>
                    <option></option>
                    <option>USER</option>   
                    <option>VIP</option>
                  </select>
                </div>
                <button type="reset" className="btn btn-success "data-dismiss="modal"  onClick={this.submit}  >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
