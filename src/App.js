import React, { Component } from 'react';
import POIList from './components/poiList';
import CarouselHeader from './components/carouselHeader';
import API from './dataStore/stubAPI';

export default class App extends Component {
  render() {

    let pois = API.getAll();
    
    return (
      <div className="jumbotron">
        <CarouselHeader />
        <POIList poi={pois} />
      </div>
    );
  }
}