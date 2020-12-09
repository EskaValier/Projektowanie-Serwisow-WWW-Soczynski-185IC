import React from "react";

import './ListElement.css';
import PropTypes from "prop-types";

const ListEl = (props) => (
    <li>{props.name} - {props.count -1}</li>
);

ListEl.propTypes={
    name: PropTypes.string,
    count: PropTypes.number
};
  
export default ListEl;