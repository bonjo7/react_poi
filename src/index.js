import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ReviewPage from "./components/reviewPage";
import { Container, Navbar } from 'react-bootstrap';

const Router = (props) => {
    return (
      <BrowserRouter>
        <Container fluid={true} className="test">
        <Navbar fixed="top" expand="lg" variant="light" bg="light">
                  <Navbar.Brand> <Link to="/">Waterford POI</Link></Navbar.Brand>
                
                </Navbar> 
          <Switch>
            <Route path="/pois/:poi_id" component={ReviewPage} />
            <Route exact path="/" component={App} />
            <Redirect from="*" to="/" />
          </Switch>
       </Container>
      </BrowserRouter>
    );
  };
  
  ReactDOM.render(<Router />, document.getElementById("root"));
