import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../composants/CardArt";
import "./ArtDeepListPage.css";
import { useArtDetailQuery } from "../queries/ArtDetailQuery";
import { useArtDeepSearchQuery } from "../queries/ArtAllParametersQuery";

export function ArtDeepSearchPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // récupère les paramètres écrit
  const departmentId = params.get("departmentId");
  const geographic = params.get("geoLocation");
  const startDate = params.get("dateBegin");
  const endDate = params.get("dateEnd");
  const object = params.get("q");

  // récupère les paramètres check

  const isHighlight = params.get("isHighlight");
  const hasImages = params.get("hasImages");
  const isOnView = params.get("isOnView");
  const artistOrCulture = params.get("artistOrCulture");

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setOffset(0);
    setLimit(8);
  }, [departmentId]);

  const artIdQueryResult = useArtDeepSearchQuery(
    parseInt(departmentId),
    geographic,
    object,
    parseInt(startDate),
    parseInt(endDate),
    isHighlight,
    hasImages,
    isOnView,
    artistOrCulture
  );
  if (
    artIdQueryResult.isLoading ||
    artIdQueryResult.isError ||
    !artIdQueryResult.data
  ) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (artIdQueryResult.data.objectIDs === null) {
    return (
      <div className="error-message">
        Error 404: There are no art pieces matching these parameters.
      </div>
    );
  }

  const goToNextPage = () => {
    setOffset(offset + 10);
    setLimit(limit + 10);
  };

  const goToPreviousPage = () => {
    setOffset(offset - 10);
    setLimit(limit - 10);
  };

  const idList = artIdQueryResult.data.objectIDs.slice(offset, limit);

  return (
    <div className="container">
      <div className="art-list">
        {idList.map((id) => (
          <ArtDetail key={id} id={id} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={offset === 0}>
          Précédent
        </button>
        <h1> Page : {offset / 10 + 1}</h1>
        <button onClick={goToNextPage}>Suivant</button>
      </div>
    </div>
  );
}

function ArtDetail({ id }: { id: number }) {
  const artQueryResult = useArtDetailQuery(id);

  if (
    artQueryResult.isLoading ||
    artQueryResult.isError ||
    !artQueryResult.data
  ) {
    return <p>Chargement en cours pour l'œuvre {id}</p>;
  }

  if (!artQueryResult.data.title) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  const theart = artQueryResult.data;

  return (
    <div>
      <Card art={theart} />
    </div>
  );
}
