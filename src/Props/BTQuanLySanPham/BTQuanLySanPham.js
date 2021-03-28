import React, { Component } from "react";
import GioHang from "./GioHang";
import SP from "./SP";

export default class BTQuanLySanPham extends Component {
  dataProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    productDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    gioHang: [
      {
        maSP:1,
        tenSP:'Iphone',
        hinhAnh:'./img/vsphone.jpg',
        soLuong:1,
        giaBan:1000
      }
    ]
  };

  themSanPham = (spClick) => {
    console.log(spClick);
    //this.setState
    // Từ sản phẩm được click tạo ra sp giỏ hàng
    const spGH = {...spClick,soLuong:1};
    // Thêm sản phẩm vừa click vào this.state.gioHang
    let gioHangCapNhat = [...this.state.gioHang];
    // Kiểm tra sản phẩm có trong giỏ hàng chưa
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGH.maSP);
    if(index !== -1) { // Sản phẩm đã có trong giỏ hàng
      gioHangCapNhat[index].soLuong += 1;
    } else { // không tìm thấy sản phẩm click có trong giỏ hàng => thêm vào
      gioHangCapNhat.push(spGH);
    }
    // Cập nhật lại state
    this.setState({
      gioHang:gioHangCapNhat,
    })
  }

  // State nằm tại component nào thì phương thức xử lí setState xây dựng tại component đó
  xoaGioHang = (maSP) => {
    console.log('ma sp', maSP);
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
    if(index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }

    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  tangGiamSoLuong = (maSP, soLuong) => {
    let gioHangCapNhat = [...this.state.gioHang];

    //tìm sản phẩm trong giỏ hàng
    let spTangGiamSL = gioHangCapNhat.find(spGH => spGH.maSP === maSP);
    if(spTangGiamSL) {
      spTangGiamSL.soLuong += soLuong;
    }

    //setState giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  renderProduct = () => {
    return this.dataProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <SP product={product} viewProductDetail={this.viewProductDetail} themSanPham={this.themSanPham}/>
        </div>
      );
    });
  };

  viewProductDetail = (productClick) => {
      //this.setState => thay đổi dữ liệu của productDetail và render lại giao diện
    this.setState({
      productDetail: productClick,
    });
  };
  render() {
    let { productDetail } = this.state;
    return (
      <div className="container">
        <GioHang xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} gioHang={this.state.gioHang}/>
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>

        <div className="m-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">{productDetail.tenSP}</h3>
              <img src={productDetail.hinhAnh} height={300} />
            </div>
            <div className="col-8">
              <h3>Thông tin sản phẩm</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Tên sản phẩm</td>
                    <td>{productDetail.tenSP}</td>
                  </tr>
                  <tr>
                    <td>Màn hình</td>
                    <td>{productDetail.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{productDetail.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Cam trước</td>
                    <td>{productDetail.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Cam sau</td>
                    <td>{productDetail.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{productDetail.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{productDetail.rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
