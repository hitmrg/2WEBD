import { useParams } from "react-router-dom";
import { useArtDetailQuery } from "../queries/ArtDetailQuery";
import { DetailCard } from "../composants/DetailCard";
import "./ArtDetail.css";

export function ArtDetailPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="error-404">Erreur 404</div>;
  }

  const artQueryResult = useArtDetailQuery(parseInt(id));

  if (
    artQueryResult.isLoading ||
    artQueryResult.isError ||
    !artQueryResult.data
  ) {
    return <p className="loading-message">Chargement en cours...</p>;
  }

  return (
    <div className="art-detail-container">
      <div className="button-container">
        <button onClick={() => history.back()}>Retour</button>
      </div>
      <div className="detail-card-container">
        <DetailCard art={artQueryResult.data} />
      </div>
    </div>
  );
}
