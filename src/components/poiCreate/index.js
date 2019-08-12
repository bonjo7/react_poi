import React, { Component } from 'react';
import { Form, Col, Button, Row, Accordion, Card } from 'react-bootstrap';
import './poiCreate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class poiCreate extends Component {

  state = { attractionType: '', name: '', author: '', description: '', latitute: '', longitude: '', admission: '' };

  handleTypeChange = (e) => this.setState({ attractionType: e.target.value });
  handleNameChange = (e) => this.setState({ name: e.target.value });
  handleAuthorChange = (e) => this.setState({ author: e.target.value });
  handleDescriptionChange = (e) => this.setState({ description: e.target.value });
  handleLatitudeChange = (e) => this.setState({ latitude: e.target.value });
  handleLongitudeChange = (e) => this.setState({ longitude: e.target.value });
  handleAdmissionChange = (e) => this.setState({ admission: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.attractionType, this.state.name, this.state.author, this.state.description, this.state.latitude, this.state.longitude, this.state.admission)
    this.setState({ attractionType: '', name: '', author: '', description: '', latitute: '', longitude: '', admission: '' })
  }

  render() {

    return (

          <Accordion>
            <Card className="card shadow lg p-3 mb-5 bg-white rounded" >
              
                <Accordion.Toggle as={Card.Header} eventKey="0" color="#24a1f5">
                  Create a Point of Interest <FontAwesomeIcon className="ml-3"  icon={["fas", "chevron-down"]} color="#24a1f5" size="lg" />
                </Accordion.Toggle>
             

          <Accordion.Collapse eventKey="0">
            <Form className="createForm" >
              <Form.Group controlId="attractionType">
                <Form.Label>Attraction Type</Form.Label>
                <Form.Control name="attractionType" as="select" value={this.state.type} onChange={this.handleTypeChange}  >
                  <option>Choose...</option>
                  <option value="historic">Historic</option>
                    <option value="Beach">Beach</option>
                    <option value="Woodlands">Woodlands</option>
                    <option value="Mountains">Mountains</option>
                    <option value="Outdoor Activity">Outdoor Activity</option>
                    <option value="Food and Drink">Food and Drink</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control name="attractionName" placeholder="Attraction Name" as="input" value={this.state.name} onChange={this.handleNameChange} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control name="attractionDescription" placeholder="Attraction Description" as="textarea" rows="5" value={this.state.description} onChange={this.handleDescriptionChange} />
              </Form.Group>

              <Form.Row>
                <Col>
                <Form.Group controlId="latitude">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control placeholder="0.000000" as="input" value={this.state.latitude} onChange={this.handlelatitudeChange} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="longitude">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control placeholder="0.000000" as="input" value={this.state.longitude} onChange={this.handleLongitudeChange} />
                </Form.Group>
                </Col>
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

              <Accordion.Toggle as={Button} eventKey="1" variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit POI
              </Accordion.Toggle>
            </Form>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      
    );


  }
}