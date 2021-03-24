import React, { Component } from "react";
import ProductComponent from "./ProductComponent";

export default class SmartPhoneComponent extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];

  renderProductItem = () =>{
    return this.arrProduct.map((product, index) => {
      return <div className="col-3" key={index}>
        <ProductComponent product={product} />
      </div>
    })
  }
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            {this.renderProductItem()}
            {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductComponent product={this.arrProduct[0]} />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductComponent product={this.arrProduct[1]} />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductComponent product={this.arrProduct[2]} />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ProductComponent product={this.arrProduct[3]} />
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
