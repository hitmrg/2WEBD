import { Link } from "react-router-dom";

import "./CardArt.css";
const DEFAULT_IMAGE_URL =
  "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";

const DEFAULT_ARTIST_NAME = "Unknown Artist";

interface ArtProps {
  art: Artwork;
}

export function Card(props: ArtProps) {
  // vérifie que l'image n'est pas vide
  const imageUrl = props.art.primaryImageSmall
    ? props.art.primaryImageSmall
    : DEFAULT_IMAGE_URL;

  // verifie que l'artiste existe
  const artistName = props.art.artistDisplayName
    ? props.art.artistDisplayName
    : DEFAULT_ARTIST_NAME;

  return (
    <div className="card-container">
      <Link to={`/art/${props.art.objectID}`}>
        <div className="card-image-container">
          <img src={imageUrl} className="card-image" alt="Artwork" />
        </div>
        <p className="card-title">{props.art.title}</p>
      </Link>
      {<p className="card-author">By: {artistName}</p>}
      <p className="card-date">Date: {props.art.objectDate}</p>
    </div>
  );
}
