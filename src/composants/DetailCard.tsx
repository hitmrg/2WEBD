import { useState } from "react";
import "./DetailCard.css";

interface ArtProps {
  art: Artwork;
}

const DEFAULT_IMAGE_URL =
  "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";

export function DetailCard(props: ArtProps) {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [mainImageUrl, setMainImageUrl] = useState(
    props.art.primaryImage || DEFAULT_IMAGE_URL
  );

  const handleMainImageChange = (imageUrl: string) => {
    setMainImageLoaded(false); // Set main image as not loaded while new image is loading
    setMainImageUrl(imageUrl);
  };

  return (
    <div className="detail-card">
      <div className="detail-cell">
        <div className="image-container">
          <img
            src={mainImageUrl}
            className={`main-image ${mainImageLoaded ? "loaded" : ""}`}
            alt="Main Artwork"
            onLoad={() => setMainImageLoaded(true)}
          />
        </div>
        <div className="button-container">
          <div className="thumbnail-buttons">
            <button
              className={`thumbnail-button`}
              onClick={() =>
                handleMainImageChange(
                  props.art.primaryImage || DEFAULT_IMAGE_URL
                )
              }
            >
              <img
                src={props.art.primaryImage || DEFAULT_IMAGE_URL}
                className={`thumbnail-image`}
                alt="Main Artwork"
              />
            </button>
            {props.art.additionalImages &&
              props.art.additionalImages.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail-button ${
                    mainImageUrl === image ? "active" : ""
                  }`}
                  onClick={() => handleMainImageChange(image)}
                >
                  <img
                    src={image}
                    className={`thumbnail-image`}
                    alt={`Additional Image ${index + 1}`}
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="global-details">
        <div className="art-details">
          <a
            href={props.art.objectWikidata_URL || props.art.linkResource}
            className="art-link"
          >
            {props.art.title && <h1 className="title">{props.art.title}</h1>}
          </a>
          {props.art.artistDisplayName && (
            <p className="artist">
              {" "}
              <span className="artist-name">
                {props.art.artistDisplayName}
              </span>{" "}
              {props.art.artistNationality && (
                <span className="artist-nationality">
                  {props.art.artistNationality}
                </span>
              )}
            </p>
          )}
          {props.art.culture && <p className="culture">{props.art.culture}</p>}
          {props.art.objectDate && (
            <p className="date">Date: {props.art.objectDate}</p>
          )}
          {props.art.objectURL && (
            <p>
              On view at The Met Fifth Avenue in
              <a
                href="https://maps.metmuseum.org/?floor=2&lang=en-GB&screenmode=base&search=403#18.25/40.780063/-73.962711/-61"
                className="resource-link"
              >
                {" "}
                Galery {props.art.GalleryNumber}
              </a>
            </p>
          )}
        </div>
        <div className="info-container">
          <h2 className="Overview">Overview informations</h2>
          {props.art.title && (
            <p>
              <span className="indicator">Title:</span> {props.art.title}
            </p>
          )}
          {props.art.artistDisplayName && (
            <p>
              <span className="indicator">Artist:</span>{" "}
              <a href={props.art.artistWikidata_URL} className="artist-name2">
                {props.art.artistDisplayName}
              </a>{" "}
              {props.art.artistNationality && (
                <span className="artist-nationality2">
                  ({props.art.artistNationality})
                </span>
              )}
            </p>
          )}
          {props.art.objectDate && (
            <p>
              <span className="indicator">Date:</span> {props.art.objectDate}
            </p>
          )}
          {props.art.medium && (
            <p>
              <span className="indicator">Medium:</span> {props.art.medium}
            </p>
          )}
          {props.art.dimensions && (
            <p>
              <span className="indicator">Dimensions:</span>{" "}
              {props.art.dimensions}
            </p>
          )}
          {props.art.classification && (
            <p>
              <span className="indicator">Classification:</span>{" "}
              {props.art.classification}
            </p>
          )}
          {props.art.creditLine && (
            <p>
              <span className="indicator">Credit Line:</span>{" "}
              {props.art.creditLine}
            </p>
          )}
          {props.art.accessionNumber && (
            <p>
              <span className="indicator">Accession Number:</span>{" "}
              {props.art.accessionNumber}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
