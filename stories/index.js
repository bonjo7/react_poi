import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from "../src/components/header/";
import POICreate from '../src/components/poiCreate';
import POIItem from '../src/components/poiItem';
import POIList from '../src/components/poiList';
import CarouselHeader from '../src/components/carouselHeader';
import { action } from "@storybook/addon-actions";
import FilterPOI from '../src/components/filterPOI';
import ReviewForm from "../src/components/reviewForm";
import Review from "../src/components/review";
import ReviewList from "../src/components/reviewList";
import LoginForm from "../src/components/authentication/loginForm";
import { MemoryRouter } from "react-router";

const poi = {
    id: 1,
    attractionType: 'Historic',
    image: "https://i.ibb.co/F59XY5Q/historic-Reg-Tower.jpg",
    name: 'Reginalds Tower',
    author: 'Bernard Thompson',
    description: 'Reginald’s Tower is Waterford’s landmark monument and Ireland’s oldest civic building. It has been in continuous use for over 800 years.  The first tower on the site was built by Vikings after 914 and formed the apex of the triangular settlement, an area known to this day as the Viking Triangle.  Re-built by the Anglo Normans in the 12th century the top two floors were added in the 15th century.  Until about 1700 the tower was the strongpoint of the medieval defensive walls that enclosed the city. The tower now houses an exhibition on Viking Waterford and is managed by the Office of Public Works.',
    admission: 'No',
    reviews: [],
    upvotes: 1
};

storiesOf("POI APP/Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Header />);

storiesOf("POI APP/Carousel", module).add("default", () => <CarouselHeader />);

storiesOf("POI APP/Create POI", module).add("default", () => <POICreate />);

storiesOf("POI APP/FIlter POI", module).add("default", () => <FilterPOI />);

storiesOf('POI APP/POI Item', module).addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  )).add('list a single POI', () => <POIItem poi={poi} upvoteHandler={action("upvoted")} deleteHandler={action('Delete confirmed') } />
)

storiesOf('POI APP/POI List', module).addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  )).add('A list of POIs', () => {
    const pois = [poi, poi, poi, poi, poi, poi]
    return <POIList poi={pois} />
});

storiesOf("POI APP/Review page/Review Form", module).add("default", () => (
    <ReviewForm poi={poi} addReviewHandler={action("review added")} />
));

const review = {
    id: 1,
    title: "Great attraction",
    rating: 3,
    author: "Chloe Thompson",
    review: "Good day out, brought the kids and they enjoyed it, we had a ball",
    upvotes: 10
};

storiesOf("POI APP/Review page/Review", module).add("default", () => (
    <Review upvoteHandler={action("upvoted")} review={review} />
));

storiesOf("POI APP/Review page/Review list", module).add("default", () => {
    const defaultReviews = [
        review,
        { ...review, id: 2, title: "Only OK", rating: 2, author: "Bernard Thompson" },
        { ...review, id: 3, title: "Loved it, great adventure", rating: 5, author: "Nicola Thompson"  },
        { ...review, id: 4, title: "Very Good", rating: 4, author: "Emily Thompson"  }
    ];
    return (
        <ReviewList upvoteHandler={action("upvoted")} reviews={defaultReviews} />
    );
});    

storiesOf("POI APP/Login Form", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <LoginForm />
  ));