import React from "react";

export default function GalleryImage({hero}) {
  return (
    <div className="gallery-image">
      <img src={hero.images.sm} />
    </div>
  );
}
