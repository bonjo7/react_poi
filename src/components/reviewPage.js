import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList';
import ReviewForm from './reviewForm';
import { Container, Row } from 'react-bootstrap';
import Header from './header';

class ReviewPage extends Component {
    addReview = (name, rating, title, review) => {
        let poiId =  this.getId()
        api.addReview(poiId, name, rating, title, review );
        this.setState({});
    };

    incrementUpvote = (reviewId) => {
        let poiId =  this.getId()
        api.upvoteReview(poiId,reviewId) ;
        this.setState({});
    };

    getId = () => parseInt( this.props.match.params.poi_id, 10);

    render() {
        let poiId = this.getId()
        let poi = api.getPoi(poiId);
        let line = poi.link?
            <a href={poi.link}>{poi.name} </a> :
            <span>{poi.name} </span> ;
        let reviews = _.sortBy(poi.reviews,
                (review) => - review.upvotes
        );
        return (
        <Container fluid={true} className="test">
        <Row>
          <Header />
        </Row>
        <Row>
        <h3>{line} </h3>
        <h2>{poi.description}</h2>
        <ReviewList reviews={reviews}
                   upvoteHandler={this.incrementUpvote } />
        </Row>
        
        <Row>
        <ReviewForm poi={poi}  addReviewHandler={this.addReview} />
        </Row>
      </Container>
        )
    }
}

export default withRouter(ReviewPage);