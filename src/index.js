import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import POIPage from "./components/fullPoiPage";
import Nav from "./components/header";
import { Container } from 'react-bootstrap';
import LoginForm from "./components/authentication/loginForm";
import PrivateRoute from "./components/authentication/privateRoute";

const Router = (props) => {
    return (
      <BrowserRouter>
        <Container fluid={true} className="test">
        <Nav />
          <Switch>
            <PrivateRoute path="/pois/:poi_id" component={POIPage} />
            <Route exact path="/" component={App} />
            <Route path="/login" component={LoginForm} />
            <Redirect from="*" to="/" />
          </Switch>
       </Container>
      </BrowserRouter>
    );
  };
  
  ReactDOM.render(<Router />, document.getElementById("root"));
