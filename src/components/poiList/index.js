import React, { Component } from "react";
import PoiItem from "../poiItem/";

export default class PoiList extends Component {
  render() {
    let poiCards = this.props.poi.map(
      (poi,index) => 
          <PoiItem key={index} 
              poi={poi} 
              upvoteHandler={this.props.upvoteHandler} /> 
      );
    return (
      <div className="container-fluid">
        <div className="row">{poiCards}</div>
      </div>
    );
  }
}