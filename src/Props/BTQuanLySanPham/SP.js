import React, { Component } from "react";

export default class SP extends Component {
  render() {
    const { viewProductDetail, product, themSanPham } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            height={300}
            src={product.hinhAnh}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.manHinh}</p>
            <button className="btn btn-success mr-3" onClick={() => {
                viewProductDetail(product);
            }}>
              Xem chi tiết
            </button>
            <button className="btn btn-danger" onClick={()=>{
                themSanPham(product);
            }}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
