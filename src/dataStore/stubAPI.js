import _ from "lodash";
import Reg from './historicRegTower.jpg'
class StubAPI {
    constructor() {
        this.pois = [
            {
                id: 1,
                attractionType: 'Historic',
                image: { thumbnail: {Reg} },
                name: 'Reginalds Tower1',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            },
            {
                id: 2,
                attractionType: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower2',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            },
            {
                id: 3,
                attractionType: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower3',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            },
            {
                id: 4,
                attractionType: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower4',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            },
            {
                id: 5,
                attractionType: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower5',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            },
            {
                id: 6,
                attractionType: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower6',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                reviews: [],
                upvotes: 1
            }
        ];
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

    getPoi(id) {
        let index = _.findIndex(this.pois, poi => poi.id === id);
        let result = index !== -1 ? this.pois[index] : null;
        return result;
    }

    addReview(poiId, n, s, t, r) {
        let poi = this.getPoi(poiId);
        let id = 1;
        let last = _.last(poi.reviews);
        if (last) {
            id = last.id + 1;
        }
        poi.reviews.push({ id: id, author: n, rating: s, title: t,  review: r,  upvotes: 0 });
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
        this.pois[index].latitude= latitude;
        this.pois[index].longitude = longitude;
        this.pois[index].admission = admission;
        return true;
        }
        return false;
    }
}

export default new StubAPI();