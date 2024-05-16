import { useState } from "react";
import { Card } from "../composants/CardArt";
import { useArtDetailQuery } from "../queries/ArtDetailQuery";
import { useArtIdQuery } from "../queries/ArtIdQuery";
import "./ArtListPage.css";

export function ArtListPage() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const artIdQueryResult = useArtIdQuery();
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
    <div>
      <h1 className="title-container">List of Highlight Arts</h1>
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

  const theart = artQueryResult.data;

  return (
    <div>
      <Card art={theart} />
    </div>
  );
}
