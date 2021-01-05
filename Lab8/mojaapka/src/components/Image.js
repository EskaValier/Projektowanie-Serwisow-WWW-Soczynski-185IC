import React from "react";

//wyświetla zdjęcie z adresu URL jako element listy o podanym tytule
const Image = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Image;
