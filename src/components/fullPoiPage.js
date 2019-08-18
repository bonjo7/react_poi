import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList';
import ReviewForm from './reviewForm';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './fullPoi.css';
import Map from './map';
import env from '../env.json';


class fullPOIPage extends Component {


    addReview = (name, rating, title, review) => {
        let poiId = this.getId()
        api.addReview(poiId, name, rating, title, review);
        this.setState({});
    };

    incrementUpvote = (reviewId) => {
        let poiId = this.getId()
        api.upvoteReview(poiId, reviewId);
        this.setState({});
    };

    getId = () => parseInt(this.props.match.params.poi_id, 10);

    render() {
        let poiId = this.getId()
        let poi = api.getPoi(poiId);
       
        let reviews = _.sortBy(poi.reviews,
            (review) => - review.upvotes
        );

        const location = { lng: poi.longitude, lat: poi.latitude };;
        
        return (
            <Container fluid={true}>

                <Card bg="light" className="cardFullPOI" >
                    <Card.Header>{poi.attractionType}</Card.Header>
                    <Card.Body>
                        <Card.Title>{poi.name}</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>

                                    <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                                    <Card.Text>
                                        {poi.description}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Location</Card.Subtitle>
                                    <Card.Text>
                                        Latitude: {poi.latitude} <br></br>Longitude: {poi.longitude}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Admission Fee</Card.Subtitle>
                                    <Card.Text>
                                        Admission Fee: {poi.admission}
                                    </Card.Text>
                                </Col>
                                <Col>
                                <Card.Subtitle className="mb-2 text-muted">Google Maps</Card.Subtitle>    
                                <Map
                                    isMarkerShown googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${env.REACT_APP_GOOGLE_API}&libraries=geometry,drawing,place`}
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    location={location}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                                </Col>
                            </Row>
                            </Card.Text>
                            
                            
                        
                    </Card.Body>
                </Card>

                <ReviewForm poi={poi} addReviewHandler={this.addReview} />

                <ReviewList reviews={reviews} upvoteHandler={this.incrementUpvote} />

            </Container>
        )
    }
}

export default withRouter(fullPOIPage);