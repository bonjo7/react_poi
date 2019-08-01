import React, { Component } from "react";
import { Form, Col, Row, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FilterPOI extends Component {

  render() {
    return (
        <Accordion>
              <Card className="card shadow lg p-3 mb-5 bg-white rounded" >
                <Accordion.Toggle as={Card.Header} eventKey="0" color="#24a1f5">
                  Find a Point of Interest<FontAwesomeIcon className="ml-3"  icon={["fas", "chevron-down"]} color="#24a1f5" size="lg" />
                </Accordion.Toggle>
             

          <Accordion.Collapse eventKey="0">
        <Form>
        <Row>
          <Col>
          <Form.Control as="select" id="Type" onChange={this.handleTypeChange}>
                  <option>Choose...</option>
                  <option>Historic</option>
                  <option>Beach</option>
                  <option>Woodlands</option>
                  <option>Mountains</option>
                  <option>Outdoor Activity</option>
                  <option>Food and Drink</option>
                </Form.Control>
          </Col>
        </Row>
      </Form>
      </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}