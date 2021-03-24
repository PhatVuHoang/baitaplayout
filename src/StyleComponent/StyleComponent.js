import React, { Component } from 'react'
// cách 1 import 
import './Style1.css';
import style from './Style2.module.css';

export default class StyleComponent extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-red">Hello Cybersoft</p>
                <div className={`p-5 ${style.textGreen} ${style['background-black']} display-4`}>
                    ahihi
                </div>
                <p style={{backgroundColor: 'black',padding:'15px',color:'white',marginTop:'5px'}}>hello front end 58</p>
            </div>
        )
    }
}
