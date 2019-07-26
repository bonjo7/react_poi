import React, { Component } from 'react';
import { Form, Col, Button, Row, Accordion, Card } from 'react-bootstrap';
import './poiCreate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class poiCreate extends Component {



  state = { type: '', name: '', author: '', description: '', latitute: '', longitude: '', admission: '' };

  handleTypeChange = (e) => this.setState({ type: e.target.value });
  handleNameChange = (e) => this.setState({ name: e.target.value });
  handleAuthorChange = (e) => this.setState({ author: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });
  handleLatitudeChange = (e) => this.setState({ latitude: e.target.value });
  handleLongitudeChange = (e) => this.setState({ longitude: e.target.value });
  handleAdmissionChange = (e) => this.setState({ admission: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.type, this.state.name, this.state.author, this.state.description, this.state.latitude, this.state.longitude, this.state.admission)
    this.setState({ type: '', name: '', author: '', description: '', latitute: '', longitude: '', admission: '' })
  }

  render() {

    return (

          <Accordion >
            <Card className="card shadow lg p-3 mb-5 bg-white rounded" >
              
                <Accordion.Toggle as={Card.Header} eventKey="0" color="#24a1f5">
                  Create a Point of Interest <FontAwesomeIcon className="ml-3"  icon={["fas", "chevron-down"]} color="#24a1f5" size="lg" />
                </Accordion.Toggle>
             

          <Accordion.Collapse eventKey="0">
            <Form >
              <Form.Group controlId="type">
                <Form.Label>Attraction Type</Form.Label>
                <Form.Control as="select" value={this.state.type} onChange={this.handleTypeChange}  >
                  <option>Choose...</option>
                  <option>Historic</option>
                  <option>Beach</option>
                  <option>Woodlands</option>
                  <option>Mountains</option>
                  <option>Outdoor Activity</option>
                  <option>Food and Drink</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control placeholder="Attraction Name" as="input" value={this.state.name} onChange={this.handleNameChange} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control placeholder="Attraction Name" as="textarea" rows="5" value={this.state.description} onChange={this.handleDescriptionChange} />
              </Form.Group>

              <Form.Row>
                <Form.Group controlId="latitude">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control placeholder="0.000000" as="input" value={this.state.latitude} onChange={this.handlelatitudeChange} />
                </Form.Group>

                <Form.Group controlId="longitude">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control placeholder="0.000000" as="input" value={this.state.longitude} onChange={this.handleLongitudeChange} />
                </Form.Group>
              </Form.Row>

              <fieldset>
                <Form.Group as={Row}>
                  <Form.Label>
                    Admission Fee
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Yes"
                      name="admission"
                      id="formHorizontalRadios1"
                      value={this.state.admission}
                      onChange={this.handleAdmissionChange}
                    />
                    <Form.Check
                      type="radio"
                      label="No"
                      name="admission"
                      id="formHorizontalRadios2"
                      value={this.state.admission}
                      onChange={this.handleAdmissionChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Voluntary"
                      name="admission"
                      id="formHorizontalRadios3"
                      value={this.state.admission}
                      onChange={this.handleAdmissionChange}
                    />
                  </Col>
                </Form.Group>
              </fieldset>

              <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit POI
              </Button>
            </Form>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );


  }
}