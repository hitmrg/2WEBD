import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../composants/CardArt";
import { useArtRapidResearchQuery } from "../queries/ArtRapidResearchQuery";
import "./ArtListPage.css";
import { useArtDetailQuery } from "../queries/ArtDetailQuery";

export function ArtSearchPage() {
  const { query } = useParams<{ query: string }>(); // Récupère le paramètre de recherche

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    setOffset(0);
    setLimit(8);
  }, [query]);

  const artIdQueryResult = useArtRapidResearchQuery(query); // Utilise `query` ici
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
