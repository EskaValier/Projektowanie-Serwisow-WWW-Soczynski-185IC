import React from "react";
import { ListItem, ListItemText } from '@material-ui/core';

import './ListElement.css';
import PropTypes from "prop-types";

const ListEl = (props) => (
    <ListItem key={props.key}> <ListItemText align='center' primary={ props.name + " serwowane jest o godzinie: " + props.time} /> </ListItem>
);

ListEl.propTypes={
    name: PropTypes.string,
    time: PropTypes.string
};
  
export default ListEl;