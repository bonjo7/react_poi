import React, { Component } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import './poiCreate.css';

export default class poiCreate extends Component {
  render() {
    // state = { type, image, name, author, description, latitute, longitude, admission };
    return (
      <Form className="form shadow lg p-3 mb-5 bg-white rounded">
        <h3>Create POI</h3>

        <Form.Group as={Col} controlId="type">
          <Form.Label>Attraction Type</Form.Label>
          <Form.Control as="select"  >
            <option>Choose...</option>
            <option>Historic</option>
            <option>Beach</option>
            <option>Woodlands</option>
            <option>Mountains</option>
            <option>Outdoor Activity</option>
            <option>Food and Drink</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="name">
          <Form.Label>Attraction Name</Form.Label>
          <Form.Control placeholder="Attraction Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder="Enter Description" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control placeholder="0.000000" />
          </Form.Group>

          <Form.Group as={Col} controlId="longitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control placeholder="0.000000" />
          </Form.Group>
        </Form.Row>
        
        <fieldset>
    <Form.Group as={Row}>
      <Form.Label column sm={2}>
        Admission Fee
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="admission"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="admission"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Voluntary"
          name="admission"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>



        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    );


  }
}