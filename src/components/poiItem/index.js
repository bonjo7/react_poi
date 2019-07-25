import React, { Component } from 'react';
import './poiItem.css';
import "../../fontawesome";
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class PoiItem extends Component {

  handleVote = () =>  this.props.upvoteHandler(this.props.poi.id);

  render() {

    return (
      <Card className="text-center shadow lg p-3 mb-5">
        <Card.Header>{` ${this.props.poi.type}`}</Card.Header>
        <Card.Body>
          <Card.Title>{` ${this.props.poi.name}`}</Card.Title>
          <Card.Img variant="top" src={this.props.poi.image.thumbnail} />
          <Card.Text>
            {this.props.poi.description}
          </Card.Text>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item" onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "heart"]} color="red" size="sm" />
              {` ${this.props.poi.upvotes}`} - Recommends</li>
            <li className="list-group-item"><a href="/"><FontAwesomeIcon icon={["fas", "comments"]} color="blue" size="lg" /> - Comments</a> </li>
          </ul>
        </Card.Body>
        <Card.Footer className="text-muted">Submitted by: {` ${this.props.poi.author}`}</Card.Footer>
      </Card>

    );
  }
}