import React, { Component } from 'react';
import { Form, Col, Button, Row, ButtonToolbar, Card} from 'react-bootstrap';
import './poiAdminControl.css';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../../dataStore/stubAPI';
import { Link } from "react-router-dom";

class poiAdminControl extends Component {

    state = { 
        attractionType: this.props.attractionType, 
        name: this.props.name, 
        author: this.props.author, 
        description: this.props.description, 
        latitute: this.props.latitude, 
        longitude: this.props.longitude, 
        admission: this.props.admission, 
        
        previousDetails: {
            attractionType: this.props.attractionType, 
            name: this.props.name, 
            author: this.props.author, 
            description: this.props.description, 
            latitute: this.props.latitude, 
            longitude: this.props.longitude, 
            admission: this.props.admission 
        }
        };

    getId = () => parseInt(this.props.match.params.poi_id, 10);

    handleTypeChange = e => this.setState({ attractionType: e.target.value });
    handleNameChange = e => this.setState({ name: e.target.value });
    handleAuthorChange = e => this.setState({ author: e.target.value });
    handleDescriptionChange = e => this.setState({ description: e.target.value });
    handleLatitudeChange = e => this.setState({ latitude: e.target.value });
    handleLongitudeChange = e => this.setState({ longitude: e.target.value });
    handleAdmissionChange = e => this.setState({ admission: e.target.value });

    handleConfirm = (e) => {

        e.preventDefault();
        let updatedAttractionType = this.state.attractionType.trim();
        let updatedName = this.state.name.trim();
        let updatedDescription= this.state.attractionType.trim();
        let updatedLatitude = this.state.name.trim();
        let updatedLongitude = this.state.attractionType.trim();
        let updatedAdmissionFee = this.state.name.trim();

        if (!updatedAttractionType || !updatedName || !updatedDescription || !updatedLatitude || updatedLongitude || updatedAdmissionFee) {
        return;
        }
        let { attractionType, name, author, description, latitude, longitude, admission } = this.state;
        this.setState({ previousDetails: { attractionType, name, author, description, latitude, longitude, admission } });
        api.update(this.state.previousDetails.id, updatedAttractionType, updatedName);
    
      };

      handleCancel = () => {
        let { attractionType, name, author, description, latitude, longitude, admission } = this.state.previousDetails;
        this.setState({ attractionType, name, author, description, latitude, longitude, admission  });
      };

      handleDelete = () => this.props.deleteHandler(this.props.poi.id);

    //   nextPath = (path) => {
    //     this.props.history.push(path);
    //   }

    //   onClick = (event)  => {
    //     handleDelete();
    //     nextPath(path);
    //  }

    render() {

    let poiId = this.getId()
    let poi = api.getPoi(poiId);

       

    return (

         
        <Card className="card shadow lg p-3 mb-5 bg-white rounded" >
             
            <Form className="createForm" >
              <Form.Group controlId="attractionType">
                <Form.Label>Attraction Type</Form.Label>
                <Form.Control name="attractionType" as="select" value={this.attractionType} onChange={this.handleTypeChange} >
                  <option>{poi.attractionType}</option>
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
                <Form.Control name="attractionName" as="input" type="text" value={poi.name} onChange={this.handleNameChange} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Attraction Name</Form.Label>
                <Form.Control name="attractionDescription" value={poi.description} as="textarea" rows="5" />
              </Form.Group>

              <Form.Row>
                <Col>
                <Form.Group controlId="latitude">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control as="input" value={poi.latitude}  />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="longitude">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control as="input" value={poi.longitude}  />
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

              <ButtonToolbar >  
              <Button className="buttons" eventKey="1" variant="primary" type="submit" onClick={this.handleSubmit}>
                Confrim POI Edit
              </Button>
              <Button className="buttons" eventKey="1" variant="warning" type="submit" onClick={ () => this.nextPath('/') }  onCLick={this.handleCancel} ><Link to="/"></Link>
                Cancel POI Edit
              </Button>
              <Button className="buttons" eventKey="1" variant="danger" type="submit" onClick={this.handleDelete}>
                Delete POI
              </Button>
              </ButtonToolbar>
              
            </Form>
          
        </Card>
   

      
    );


  }
}

export default withRouter(poiAdminControl);