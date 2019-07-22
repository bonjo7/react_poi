import React, { Component } from "react";
import PoiItem from "../poiItem/";

export default class PoiList extends Component {
  render() {
    const poiCards = this.props.poi.map(p => (
      <PoiItem key={p.title} poi={p} />
    ));
    return (
      <div className="container-fluid contacts bg-info">
        <div className="row">{poiCards}</div>
      </div>
    );
  }
}