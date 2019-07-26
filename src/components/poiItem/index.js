import React, { Component } from 'react';
import './poiItem.css';
import "../../fontawesome";
import { Card} from 'react-bootstrap';
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

      <Card.Link onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "heart"]} color="red" size="lg" />
              {` ${this.props.poi.upvotes}`}</Card.Link>
             
              <Card.Link href="/"><FontAwesomeIcon icon={["fas", "comments"]} color="#24a1f5" size="lg" /> </Card.Link>

              <Card.Link><FontAwesomeIcon icon={["fas", "edit"]} color="#9bd4e4" size="lg" /> </Card.Link>

              <Card.Link><FontAwesomeIcon icon={["fas", "trash-alt"]} color="red" size="lg" /> </Card.Link>
             
          
          
        </Card.Body>
        <Card.Footer className="text-muted">Submitted by: {` ${this.props.poi.author}`}</Card.Footer>
      </Card>

    );
  }
}