import Authentication from "../../util/authentication";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';

const AuthButton = props => {
  const { history } = props;
  return Authentication.isAuthenticated ? (
    <Fragment>
      Logged in as: {`${Authentication.username} `}  
      <Button variant="danger"
        onClick={() => {
          Authentication.signout(() => history.push("/"));
        }}
      >
        Sign out
      </Button>
    </Fragment>
  ) : (
    <Button variant="info"
      onClick={() => {
        history.push("/login");
      }}
    >
      Admin Login
    </Button>
  );
};

export default withRouter(AuthButton);