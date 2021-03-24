import React, { Component } from 'react'
import SliderComponent from './SliderComponent'
import HeaderComponent from './HeaderComponent'
import LaptopComponent from './LaptopComponent'
import FooterComponent from './FooterComponent'
import ProductListComponent from './ProductListComponent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <HeaderComponent />
                <SliderComponent />
                <ProductListComponent />
                <LaptopComponent />
                <FooterComponent />
            </div>
        )
    }
}
