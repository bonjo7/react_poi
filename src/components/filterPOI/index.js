import React, { Component } from "react";
import { Form, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FilterPOI extends Component {

  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };
  handleTextChange = e => {
    this.handleChange(e, "name", e.target.value);
  };
  handleAttractionTypeChange = e => {
    this.handleChange(e, "attractionType", e.target.value);
  };

  render() {
    return (
      <Accordion>
        <Card className="card shadow lg p-3 mb-5 bg-white rounded" >
          <Accordion.Toggle as={Card.Header} eventKey="0" color="#24a1f5">
            Find a Point of Interest<FontAwesomeIcon className="ml-3" icon={["fas", "chevron-down"]} color="#24a1f5" size="lg" />
          </Accordion.Toggle>


          <Accordion.Collapse eventKey="0">
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control placeholder="Attraction Name Search" type="text" onChange={this.handleTextChange} />
              </Form.Group>

              <Form.Group controlId="attractionType">
                <Form.Control as="select" type="text" onChange={this.handlAattractionTypeChange}  >
                  <option value="all">All</option>
                  <option value="Historic">Historic</option>
                  <option value="Beach">Beach</option>
                  <option value="Woodlands">Woodlands</option>
                  <option value="Mountains">Mountains</option>
                  <option value="Outdoor Activity">Outdoor Activity</option>
                  <option value="Food and Drink">Food and Drink</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    );
  }
}