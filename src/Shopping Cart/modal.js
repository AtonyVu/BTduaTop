import React, { Component } from "react";

export default class Modal extends Component {

  renderTable= ()=>{
    const {dataCart , updateCart}=this.props;
    const render1 = dataCart.map((item)=>{
      return(
        <tr>
        <td>1</td>
        <td >{item.tenSP}</td>
        <td>
          <img src="./img/vsphone.jpg" width={50} alt="" />
        </td>
        <td>
          <button onClick={()=>{this.props.ChangeSL(item,false)}}>-</button>{item.soLuong}<button onClick={()=>{this.props.ChangeSL(item,true)}}>+</button>
        </td>
        <td>5700000</td>
        <td>{5700000*item.soLuong}</td>
        <td>
          <button className="btn btn-danger"onClick={()=>{this.props.deleteItem(item)}}>Delete</button>
        </td>
      </tr>
      );
    }
  )
    return(render1);
  }
  render() {
    return (
     <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "1000px" }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                     {this.renderTable()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
  }
}
