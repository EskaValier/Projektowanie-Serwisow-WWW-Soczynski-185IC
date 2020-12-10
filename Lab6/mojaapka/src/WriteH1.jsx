import React from "react";

import PropTypes from "prop-types";

const WriteH1 = (props) => (
    <h1>{props.text}</h1>
);

WriteH1.propTypes={
    text: PropTypes.string
};
  
export default WriteH1;