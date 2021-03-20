import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart:[],
    };
  }
  deleteItem = async (item)=>{
        let vitri=this.getIndex(item.maSP);
        let updateList = [...this.state.listCart];
        updateList.splice(vitri,1);
       await  this.setState({listCart:updateList});
         console.log(this.state.listCart);
  }
  changeSL = async (item,status)=>{
    let vitri = this.getIndex(item.maSP);
  
    if(status)
    {
        item.soLuong+=1;
    }
    else
    {
      item.soLuong-=1;
    }
    let updateList = [...this.state.listCart];
    updateList[vitri]=item;
   await  this.setState({listCart:updateList});
     console.log(this.state.listCart);
  }
getIndex = (maSP)=>{
      return this.state.listCart.findIndex((itemm)=>{
            return itemm.maSP ===maSP;
      })
}
  renderdataCart=()=>{
       
  }
  handleGetDetailProduct = (product) => {
    this.setState({
      detailProduct: product
    });
  };

getdataCart= async(item)=>{
    let productNew ={
            maSP : item.maSP,
            tenSP:item.tenSP,
            hinhAnh:item.hinhAnh,
            soLuong:1,
            giaBan:item.giaBan,
    }
    
    let listCartt=[...this.state.listCart];
    let vitri = this.getIndex(productNew.maSP);
console.log(vitri);
    console.log(productNew.maSP);
   
    if(vitri === -1)
    {
      listCartt=[...this.state.listCart,productNew];
    }
    else
    { 
      listCartt[vitri].soLuong+=1;
    }
  
  await  this.setState({listCart:listCartt});
    console.log(this.state.listCart);
}

  render() {
    const { detailProduct } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.state.listCart.length})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.listProduct}
          getDetailProduct={this.handleGetDetailProduct}
          getdataCart={this.getdataCart}
        />
        <Modal dataCart={this.state.listCart} ChangeSL={this.changeSL} deleteItem={this.deleteItem} updateCart={this.state.listCart.length}/>
        
      </div>
    );
  }
}
