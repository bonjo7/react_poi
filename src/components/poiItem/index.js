import React, { Component } from 'react';
import './poiItem.css';
import "../../fontawesome";
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';

export default class PoiItem extends Component {

  

  state = {
    status: "",
    attractionType: this.props.poi.attractionType,
    name: this.props.poi.name,
    description: this.props.poi.description,
    latitude: this.props.poi.latitude,
    longitude: this.props.poi.longitude,
    admission: this.props.poi.admission,
    previousDetails: {
      attractionType: this.props.poi.attractionType,
      name: this.props.poi.name,
      description: this.props.poi.description,
      latitude: this.props.poi.latitude,
      longitude: this.props.poi.longitude,
      admission: this.props.poi.admission
    }
};

  handleVote = () =>  this.props.upvoteHandler(this.props.poi.id);

  handleDelete = () => this.props.deleteHandler(this.props.poi.id);

  render() {

    return (
      <Card className="text-center shadow lg p-3 mb-5 mt-5 col-md-4 poi">
        
        <Card.Header>{` ${this.props.poi.attractionType}`}</Card.Header>
        <Card.Body>
          <Card.Title>{` ${this.props.poi.name}`}</Card.Title>
          <Card.Img variant="top" src={this.props.poi.image.thumbnail} />
          
            <TextTruncate
              line={5}
              element="span"
              truncateText="…"
              text={this.props.poi.description}
              textTruncateChild={<Link to={`/pois/${this.props.poi.id}` }>See More...</Link>}
            />
          
          <Card.Text> </Card.Text>
      <Card.Link onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "heart"]} color="red" size="lg" />
              {` ${this.props.poi.upvotes}`}</Card.Link>
             
              <Card.Link> <Link to={`/pois/${this.props.poi.id}` }><FontAwesomeIcon icon={["fas", "comments"]} color="#24a1f5" size="lg" /></Link> </Card.Link>

              <Card.Link ><FontAwesomeIcon icon={["fas", "edit"]} color="#9bd4e4" size="lg" /> 
              
      </Card.Link>

              <Card.Link onClick={this.handleDelete}><FontAwesomeIcon icon={["fas", "trash-alt"]} color="red" size="lg" /> </Card.Link>
             
          
          
        </Card.Body>
        <Card.Footer className="text-muted">Submitted by: {` ${this.props.poi.author}`}</Card.Footer>
        
      </Card>

      

    );
  }
}
