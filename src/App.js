import React, { Component } from 'react';
import POIList from './components/poiList';
import CarouselHeader from './components/carouselHeader';
import API from './dataStore/stubAPI';
import AddPOI from './components/poiCreate';
import _ from 'lodash';
import { Container, Row} from 'react-bootstrap';

export default class App extends Component {
  addPoi = (type, name, author, description, latitute, longitude, admission) => {
    API.add(type, name, author, description, latitute, longitude, admission);
    this.setState({});
  };
  incrementUpvote = (id) => {
    API.upvote(id);
    this.setState({});
  };

  deletePOI = (id) => {
    API.deletePOI(id); 
    this.setState({});                          
};

  render() {

    let pois = _.sortBy(API.getAll(), poi => -poi.upvotes);

    return (
      <Container>
        <Row>         
        <CarouselHeader />        
        </Row>
        <Row>
          <AddPOI handleAdd={this.addPoi} />          
        </Row>
        <Row>
        <POIList poi={pois} upvoteHandler={this.incrementUpvote} deleteHandler={this.deletePOI}  />              
        </Row>
      </Container> 
    );
  }
}

