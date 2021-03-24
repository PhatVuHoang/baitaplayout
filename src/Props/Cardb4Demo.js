import React, { Component } from "react";

export default class Cardb4Demo extends Component {
  render() {
    // this.props là thuộc tính có sẵn của component dùng nhận giá trị từ component cha truyền vào
    // this.props không thể gán lại giá trị
    let {productName, price} = this.props;

    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/200"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{productName}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
