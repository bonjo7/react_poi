import _ from "lodash";
class StubAPI {
    constructor() {
        this.pois = [
            {
                id: 1,
                type: 'Historic',
                image: { thumbnail: './historicRegTower.jpg' },
                name: 'Reginalds Tower1',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            },
            {
                id: 2,
                type: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower2',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            },
            {
                id: 3,
                type: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower3',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            },
            {
                id: 4,
                type: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower4',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            },
            {
                id: 5,
                type: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower5',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            },
            {
                id: 6,
                type: 'Historic',
                image: { thumbnail: '../src/images/historicRegTower.jpg' },
                name: 'Reginalds Tower6',
                author: 'Bernard Thompson',
                description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
                latitude: '',
                longitude: '',
                admission: 'No',
                comments: [],
                upvotes: 1
            }
        ];
    }

    getAll() {
        return this.pois;
    }

    add(type, image, name, author, description, latitude, longitude, admission) {
        let id = 1;
        let last = _.last(this.pois);
        if (last) {
            id = last.id + 1;
        }
        let len = this.pois.length;
        let newLen = this.pois.push({
            type,
            image,
            name,
            author,
            description,
            latitude,
            longitude,
            admission,
            comments: [],
            upvotes: 0
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

    addComment(poiId, c, n) {
        let poi = this.getPoi(poiId);
        let id = 1;
        let last = _.last(poi.comments);
        if (last) {
            id = last.id + 1;
        }
        poi.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(poiId, commentId) {
        let poi = this.getPoi(poiId);
        let index = _.findIndex(poi.comments, c => c.id === commentId);
        if (index !== -1) {
            poi.comments[index].upvotes += 1;
        }
    }
}

export default new StubAPI();