import React, {Component} from "react";
import { Carousel } from 'react-bootstrap';
import waterford from './wd.png';
import tramore from './tramore.png';
import mountains from './mountains.png';
import "./carousel.css";

export default class CarouselHeader extends Component {
    render(){
        return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={waterford}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Waterford City</h3>
      <p>Explore Ireland's oldest city, founded by the Vikings in 941AD</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tramore}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Tramore Strand</h3>
      <p>One of Waterford's many wonderful beachers</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mountains}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Commeragh Mountains</h3>
      <p>Take ot the hills and explore from above</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        );
    }
}