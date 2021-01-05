import React from "react";
import Container from "./Container";

//Wypisanie tekstu wraz z kategorią jaką wpisał użytkownik, przekazanie wyszukania do "Container"
const Search = ({ searchTerm }) => {
  return (
    <div>
      <h2> Wyszukane zdjęcia: </h2>
      <h2> {searchTerm} </h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
