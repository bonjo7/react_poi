import React, { Component} from 'react';
import './poiList.css';
import "../../fontawesome";
import { Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class PoiList extends Component {
    render() {

        return (
//             // <Card style={{ width: '18rem' }}>
//             //     <Card.Img variant="top" src="holder.js/100px180" />
//             //     <Card.Body>
//             //         <Card.Title>{` ${this.props.post.title}`}</Card.Title>
//             //         <Card.Text>{this.props.post.description}
//             //         </Card.Text>
//             //         <p>
//             //             <FontAwesomeIcon icon={["fas", "heart"]} color="red" size="md" />
//             //             {` ${this.props.post.upvotes}`}
//             //         </p>
//             //         <p className="author">{this.props.post.author}</p>
//             //         <Button variant="primary">Go somewhere</Button>
//             //     </Card.Body>
//             // </Card>

// {/* <Card>
// <Card.Header>Featured</Card.Header>
// <Card.Body>
//   <Card.Title>{` ${this.props.post.title}`}</Card.Title>
//   <Card.Text>
//   {this.props.post.description}
//   </Card.Text>
//   <p>
//             //             <FontAwesomeIcon icon={["fas", "heart"]} color="red" size="md" />
//             //             {` ${this.props.post.upvotes}`}
//             //         </p>
//   <Button variant="primary">Go somewhere</Button>
//   <Card.Footer className="text-muted">{` ${this.props.post.author}`}</Card.Footer>
// </Card.Body>
// </Card> */}

<Card className="text-center">
  <Card.Header>{` ${this.props.post.type}`}</Card.Header>
  <Card.Body>
    <Card.Title>{` ${this.props.post.title}`}</Card.Title>
    <Card.Img variant="top" src="" />
    <Card.Text>
    {this.props.post.description}
    </Card.Text>
    <p>
            <FontAwesomeIcon icon={["fas", "heart"]} color="red" size="md" />
             {` ${this.props.post.upvotes}`}
        </p>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">{` ${this.props.post.author}`}</Card.Footer>
</Card>

        );
    }
}