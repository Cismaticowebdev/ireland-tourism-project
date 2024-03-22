import { useState } from "react";

function PictureCard({ name, path, description, alt }) {
  const [showInfo, setShowInfo] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);

  function handleShowInfo() {
    showInfo ? setShowInfo(false) : setShowInfo(true);
  }

  function handleImageClicked() {
    imageClicked ? setImageClicked(false) : setImageClicked(true);
  }

  return (
    <section className="picture-card">
      <h2>{name}</h2>
      <img
        onClick={handleImageClicked}
        className={
          imageClicked ? "attraction-image-clicked" : "attraction-image"
        }
        src={path}
        alt={alt}
      />
      {showInfo && <p>{description}</p>}
      <button className="info-button" onClick={handleShowInfo}>
        Info
      </button>
    </section>
  );
}

export default PictureCard;
