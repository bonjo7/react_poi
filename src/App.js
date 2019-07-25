import React, { Component } from 'react';
import POIList from './components/poiList';
import CarouselHeader from './components/carouselHeader';
import API from './dataStore/stubAPI';
import AddPOI from './components/poiCreate';
import _ from 'lodash';

export default class App extends Component {
  addPoi = (type, name, author, description, latitute, longitude, admission) => {
    API.add(type, name, author, description, latitute, longitude, admission);
    this.setState({});
  };
  incrementUpvote = (id) => {
    API.upvote(id);
    this.setState({});
  };

  render() {

    let pois = _.sortBy(API.getAll(), poi => -poi.upvotes);

    return (
      <div className="jumbotron">
        <CarouselHeader />
        <POIList poi={pois}
          upvoteHandler={this.incrementUpvote} />
          <AddPOI handleAdd={this.addPoi} />
      </div>
    );
  }
}