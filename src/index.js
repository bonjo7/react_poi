import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ReviewPage from "./components/reviewPage";

const Router = (props) => {
    return (
      <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-3">
                <h1>
                  <Link to="/">Waterford POI</Link>
                </h1>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/pois/:poi_id" component={ReviewPage} />
            <Route exact path="/" component={App} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
  
  ReactDOM.render(<Router />, document.getElementById("root"));
