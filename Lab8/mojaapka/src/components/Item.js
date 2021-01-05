import React from "react";
import Container from "./Container";

// zastępuje "Search.js", przeznaczony dla przycisków z 4 kategoriami
const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
