import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        source: "./img/imgRedCar.jpg"
    }

    // btnRed = () => {
    //     this.setState({
    //         source: "./img/imgRedCar.jpg"
    //     })
    // }

    // btnSilver = () => {
    //     this.setState({
    //         source: "./img/imgSilverCar.jpg"
    //     })
    // }

    // btnBlack = () => {
    //     this.setState({
    //         source: "./img/imgBlackCar.jpg" 
    //     })
    // }

    changeColor = (color) => {
        this.setState({
            source: `./img/img${color}Car.jpg`
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 text-center">
                        <p>Please choose your favorite about car's color</p>
                        <img src={this.state.source} width="500" height="200"/>
                    </div>
                    <div className="col-6 text-center">
                        <p>Change color</p>
                        <button className="btn btn-danger mr-5" onClick={() => {this.changeColor('Red')}}>Red color</button>
                        <button className="btn btn-secondary mx-5" onClick={() => {this.changeColor('Silver')}}>Silver color</button>
                        <button className="btn btn-dark mx-5" onClick={() => {this.changeColor('Black')}}>Black color</button>
                    </div>
                </div>
            </div>
        )
    }
}
