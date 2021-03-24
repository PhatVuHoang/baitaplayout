import React, { Component } from 'react'

export default class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>
                    <img src={spGH.hinhAnh} height={50}/>
                </td>
                <td>{spGH.tenSP}</td>
                <td>{spGH.soLuong}</td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="mt-5">
                <h3>Giỏ hàng</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá bán</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
