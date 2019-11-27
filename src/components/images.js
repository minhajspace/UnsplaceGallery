import React from "react";

const ImagesList = propos => {
  const images = propos.images.map((image, index) => {
    return <img alt="carpicture" src={image.urls.regular} />;
  });
  return <div> {images}</div>;
};

export default ImagesList;
