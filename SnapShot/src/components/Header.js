import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

// nagłówek wyświetlający tytuł strony, formularz oraz panel nawigacyjny (4-przyciski z kategoriami)
const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Wyszukiwarka zdjęć</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
