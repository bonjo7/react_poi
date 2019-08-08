import React, { Component } from "react";
import PoiItem from "../poiItem/";
import { Row, Container} from 'react-bootstrap';

export default class PoiList extends Component {
  render() {
    let poiCards = this.props.poi.map(
      (poi,index) => 
          <PoiItem key={index} 
              poi={poi} 
              upvoteHandler={this.props.upvoteHandler}
              deleteHandler={this.props.deleteHandler} /> 
      );
    return (
      <Container fluid={true}>
        <Row>{poiCards}</Row>
      </Container>
    );
  }
}