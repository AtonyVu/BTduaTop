import { data } from "jquery";
import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {

 getDataProductIndex=(dataCart)=>{
   this.props.getdataCart(dataCart)
 }

  renderListProduct = () => {
    const { listProduct } = this.props;
    return listProduct.map((item) => {
      return (
        <SanPham
          key={item.maSP}
          product={item}
          getDetailProduct={this.props.getDetailProduct}
          getDataProductCart={this.getDataProductIndex}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
