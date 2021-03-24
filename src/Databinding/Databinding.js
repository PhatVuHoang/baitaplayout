import React, { Component } from 'react'

export default class Databinding extends Component {

    name = 'frontend58';


    renderSV = () => {
        let sinhVien = {
            ma: 1,
            ten: 'nguyen van a',
        }
        //nội dung hiển thị lên phương thức render phải trả về 1 component, hoặc chuỗi, số,...
        return <div>
            <p>Mã: {sinhVien.ma}</p>
            <p>Tên: {sinhVien.ten}</p>
        </div>   
    }
    // ngoài hàm là thuộc tính và phương thức, trong hàm thì là biến
    render() {
        let title = 'cybersoft';
        let renderTitle = () => {
            return <div>Cybersoft</div>
        }
        return (
            <div>
                <p id="title" className="display-4">{title}</p>
                <p>{this.name}</p>
                {this.renderSV()}
                {renderTitle()}
            </div>
        )
    }
}
