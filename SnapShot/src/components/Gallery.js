import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

//wyszukanie i wyświetlenie zdjęć (lub ich brak)
//sprawdza czy w przyjętych danych (props) znajdują się dane na temat zdjęć i je wyświetla korzystając z IMAGE
//jeśli nie ma zdjęć wyświetlany jest element NoImages informujący o braku zdjęć z danej kategorii
const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
