import React, { Fragment } from "react";

import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ poi }) => {

  return (
    <Fragment>
      <h4>
        <FontAwesomeIcon icon={["fas", "home"]} />
        <span> {poi.name}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <span> {poi.description}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <span> {poi.latitude}</span>
      </h4>
      <h4>
        <FontAwesomeIcon icon={["fas", "birthday-cake"]} />
        <span> {poi.longitude}</span>
      </h4>
    </Fragment>
  );
};