import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImagesList = propos => {
  const images = propos.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image_List"> {images}</div>;
};

export default ImagesList;
