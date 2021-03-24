import React, { Component } from "react";
import Cardb4Demo from "./Cardb4Demo";

export default class DemoProps extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
              <Cardb4Demo productName="iphoneX" price="1000"/>
          </div>
          <div className="col-4">
              <Cardb4Demo productName="iphone XS" price="2000"/>
          </div>
        </div>
      </div>
    );
  }
}
