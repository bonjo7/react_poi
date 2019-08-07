import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';

export default class ReviewForm extends Component {

  state = { name: "", rating: "", title:"", review: "" };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleRatingChange = e => {
    this.setState({ rating: e.target.value });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleReviewChange = e => {
    this.setState({ review: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let name = this.state.name.trim();
    let rating = this.state.rating.trim();
    let title = this.state.title.trim();
    let review = this.state.review.trim();
    if (!review) {
      return;
    }
    this.props.addReviewHandler(name, rating, title, review);
    this.setState({ name: "", rating: "", title: "", review: "" });
  };

  render() {
    return (

      <Form>
        <Form.Group controlId="reviewName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" value={this.state.name}
            onChange={this.handleNameChange} />
        </Form.Group>
        <Form.Group controlId="reviewRtinga">
          <Form.Label>Rating, 1 being bad, 5 being good</Form.Label>
          <Form.Control as="select" value={this.state.rating} onChange={this.handleRatingChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="reviewTitle">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Title" value={this.state.title}
            onChange={this.handleTitleChange} />
        </Form.Group>
        <Form.Group controlId="review">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows="3" value={this.state.review}
            onChange={this.handleReviewChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}