import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList'
import ReviewForm from './reviewForm'

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
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-1">
                <h3>{line} </h3>
                <ReviewList reviews={reviews}
                    upvoteHandler={this.incrementUpvote } />
                <ReviewForm poi={poi}  addReviewHandler={this.addReview} />
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(ReviewPage);