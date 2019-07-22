import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import POICreate from '../src/components/poiCreate';
import POIList from '../src/components/poiList';

const post = {
    id: 1 ,
    type: 'Historic',
    image: '../src/images/historicRegTower.jpg',
    title : 'Reginalds Tower',
    author : 'Bernard Thompson',
    description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
    admission: 'No',
    comments : [],
    upvotes: 1
};


storiesOf("POI APP/Create POI", module).add("default", () => <POICreate />);

storiesOf('POI App/POI List', module)
    .add('default', () => <POIList post= { post }  />
    )
    .add('No hyperlink', () => <POIList post= { { ...post, link: ''} }  />
    )