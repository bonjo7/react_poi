import React, { Component } from 'react';
import POIList from './components/poiList';
import CarouselHeader from './components/carouselHeader';
import API from './dataStore/stubAPI';
import AddPOI from './components/poiCreate';
import Filter from './components/filterPOI';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import request from "superagent";

export default class App extends Component {

  componentDidMount() {
    let url = 'http://localhost:3001/pois'
    request.get(url).end((error, res) => {
    if (res) {
        let pois = JSON.parse(res.text);
        API.initialize(pois);
        this.setState({});
        
        console.log('api added ' + url)
    } else {
        console.log(error);
    }
    });
}

  state = { search: "", attractionType: "all" };

  handleChange = (type, value) => {
    type === "name"
      ? this.setState({ search: value })
      : this.setState({ attractionType: value });
  };

  addPoi = (attractionType, name, author, description, latitute, longitude, admission) => {
    API.add(attractionType, name, author, description, latitute, longitude, admission);
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
    let filteredPOIs = pois.filter(p => {
      const name = `${p.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredPOIs =
      this.state.attractionType === "all"
        ? filteredPOIs
        : filteredPOIs.filter(p => p.attractionType === this.state.attractionType);


    return (
      <Container fluid={true}>
        
        <Row>
          <CarouselHeader />
        </Row>
        <Row>
          <Col>
            <AddPOI handleAdd={this.addPoi} />
          </Col>
          <Col>
            <Filter onUserInput={this.handleChange} />
          </Col>
        </Row>
        <Row>
          <POIList poi={pois} upvoteHandler={this.incrementUpvote} deleteHandler={this.deletePOI} />
          
        </Row>
      </Container>
    );
  }
}

