import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import POICreate from '../src/components/poiCreate';
import POIItem from '../src/components/poiItem';
import POIList from '../src/components/poiList';
import CarouselHeader from '../src/components/carouselHeader';
import { action } from "@storybook/addon-actions";
import FilterPOI from '../src/components/filterPOI';
import CommentForm from "../src/components/commentForm";
import Comment from "../src/components/comment";
import CommentList from "../src/components/commentList";

const poi = {
    id: 1,
    type: 'Historic',
    image: { thumbnail: '../src/images/historicRegTower.jpg' },
    name: 'Reginalds Tower',
    author: 'Bernard Thompson',
    description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
    admission: 'No',
    comments: [],
    upvotes: 1
};

storiesOf("POI APP/Carousel", module).add("default", () => <CarouselHeader />);

storiesOf("POI APP/Create POI", module).add("default", () => <POICreate />);

storiesOf("POI APP/FIlter POI", module).add("default", () => <FilterPOI />);

storiesOf('POI APP/POI Item', module).add('list a single POI', () => <POIItem poi={poi} upvoteHandler={action("upvoted")} deleteHandler={action('Delete confirmed') } />
)

storiesOf('POI APP/POI List', module).add('A list of POIs', () => {
    const pois = [poi, poi, poi, poi, poi, poi]
    return <POIList poi={pois} />
});

storiesOf("POI APP/Comment page/Comment Form", module).add("default", () => (
    <CommentForm poi={poi} addCommentHandler={action("comment added")} />
));

const comment = {
    id: 1,
    author: "Joe Bloggs",
    comment: "I agree with .....",
    upvotes: 10
};

storiesOf("POI APP/Comment page/Comment", module).add("default", () => (
    <Comment upvoteHandler={action("upvoted")} comment={comment} />
));

storiesOf("POI APP/Comment page/Comment list", module).add("default", () => {
    const defaultComments = [
        comment,
        { ...comment, author: "Jane Smith", upvotes: 3, id: 2 },
        { ...comment, comment: "On the other hand", id: 3 },
        { ...comment, author: "Jill Dwyer", upvotes: 5, id: 4 }
    ];
    return (
        <CommentList upvoteHandler={action("upvoted")} comments={defaultComments} />
    );
});    