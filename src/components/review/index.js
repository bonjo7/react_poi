import React, { Component } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col } from 'react-bootstrap';

export default class Review extends Component {
  handleVote = () => {
    this.props.upvoteHandler(this.props.review.id);
  };
  render() {
    return (

      <Card border="info">
        <Card.Header>
          <Card.Title>{` ${this.props.review.title}`}</Card.Title>
          <Col>    <Card.Link><FontAwesomeIcon icon={["fas", "star"]} color="#FFD700" size="lg" /> Rating- {` ${this.props.review.rating}`} </Card.Link></Col>
        </Card.Header>
        <Card.Body>


          <blockquote className="blockquote mb-0">
            <p>
              {`${this.props.review.review}`}
            </p>
          </blockquote>
          <Card.Link onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "thumbs-up"]} color="#24a1f5" size="lg" /> {` ${this.props.review.upvotes}`} Review Likes</Card.Link>

          <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
              by {` ${this.props.review.author}`}
            </footer>
          </blockquote>

        </Card.Body>
      </Card>
    );
  }
}