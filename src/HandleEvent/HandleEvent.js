import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () =>{
        alert('hello cybersoft');
    }
    showMess = (mess) =>{
        alert(mess)
    }
    render() {
        return (
            <div className="container">
                <button id="btnSubmit" onClick={this.handleClick}>Click</button>
                <button className="btn btn-success" onClick={() => {
                    this.showMess('cybersoft - fe58')
                    // Gọi các hàm xử lí khác
                    }}>show mess</button>
            </div>
        )
    }
}
