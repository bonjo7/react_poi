import _ from "lodash";
class StubAPI {
    constructor() {
        this.pois = [];
    }

    getPoi(id) {
        let index = _.findIndex(this.pois, poi => poi.id === id);
        if (index !== -1) {
            return this.pois[index];
            }
            return null;
        // let result = index !== -1 ? this.pois[index] : null;
        // return result;
    }

    initialize(pois) {
        this.pois = pois;
    }

    getAll() {
        return this.pois;
    }

    add(attractionType, name, author, description, latitude, longitude, admission) {
        let id = 1;
        let last = _.last(this.pois);
        if (last) {
            id = last.id + 1;
        }
        let len = this.pois.length;
        let newLen = this.pois.push({
            attractionType,
            name,
            author,
            description,
            latitude,
            longitude,
            admission,
            reviews: [],
            upvotes: 0,
            image: {}
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.pois, poi => poi.id === id);
        if (index !== -1) {
            this.pois[index].upvotes += 1;
            return true;
        }
        return false;
    }

    addReview(poiId, n, s, t, r) {
        let poi = this.getPoi(poiId);
        let id = 1;
        let last = _.last(poi.reviews);
        if (last) {
            id = last.id + 1;
        }
        poi.reviews.push({ id: id, author: n, rating: s, title: t, review: r, upvotes: 0 });
    }

    upvoteReview(poiId, reviewId) {
        let poi = this.getPoi(poiId);
        let index = _.findIndex(poi.reviews, r => r.id === reviewId);
        if (index !== -1) {
            poi.reviews[index].upvotes += 1;
        }
    }

    deletePOI(id) {
        let elements = _.remove(this.pois, poi => poi.id === id);
        return elements;
    }

    editPOI(id, attractionType, name, description, latitude, longitude, admission) {
        let index = _.findIndex(this.pois, poi => poi.id === id);
        if (index !== -1) {
            this.pois[index].attractionType = attractionType;
            this.pois[index].name = name;
            this.pois[index].description = description;
            this.pois[index].latitude = latitude;
            this.pois[index].longitude = longitude;
            this.pois[index].admission = admission;
            return true;
        }
        return false;
    }
}

export default new StubAPI();