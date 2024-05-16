import { useState } from "react";
import "./DeepSearch.css";
import { Link } from "react-router-dom";
import { useDepartmentIdSearchQuery } from "../queries/ArtDepartmentIdQuery";
import { useDepartmentAllQuery } from "../queries/ArtAllDepartmentQuery";

export function DeepSearch() {
  const [showFilters, setShowFilters] = useState(false); // controler l'affichage du formulaire

  const [department, setDepartment] = useState("");
  const [departmentId, setDepartmentId] = useState(0);
  const [geographic, setGeographic] = useState("");
  const [object, setObject] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);

  // checkbox values : isHighLight, Tags, etc...

  const [isHighLight, setIsHighLight] = useState(false);
  const [artworkImage, setArtworkImage] = useState(false);
  const [isOnView, setIsOnView] = useState(false);

  // la seule checkbox qui modifie les paramètres
  const [naziProvenance, setnaziProvenance] = useState(false); // artistOrCulture = false and StartDate = 1933 and EndDate = 1945

  const toggleFilters = () => {
    setShowFilters(!showFilters); // inverse la valeur pour l'afficher
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // empeche le comportement par défaut du formulaire

    console.log("Department:", departmentId);
    console.log("Geographic Location:", geographic);
    console.log("Object Type / Material:", object);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const departmentsQuery = useDepartmentAllQuery(); // récupère id et nom de tout les départments disponible

  const isFormValid = department !== "" && object !== "";

  return (
    <>
      <div className="grid-container">
        <button className="button-filter-container" onClick={toggleFilters}>
          Recherches Avancées
        </button>
        {showFilters && (
          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="department">Department :</label>
            <select
              id="department-container"
              name="department"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDepartmentId(parseInt(e.target.value));
              }}
            >
              <option value="">Select Department</option>
              {departmentsQuery.data &&
                departmentsQuery.data.departments.map((dep) => (
                  <option key={dep.departmentId} value={dep.departmentId}>
                    {dep.displayName}
                  </option>
                ))}
            </select>
            <label htmlFor="geographic">Geographic Location :</label>
            <input
              id="geographic-container"
              type="text"
              name="geographic"
              value={geographic}
              onChange={(e) => setGeographic(e.target.value)}
            ></input>
            <label htmlFor="type">Object Type / Material :</label>
            <input
              id="object-container"
              type="text"
              name="object"
              value={object}
              onChange={(e) => setObject(e.target.value)}
            ></input>
            <label htmlFor="start-date">Start Date :</label>
            <input
              id="start-date-container"
              type="number"
              name="start_date"
              value={startDate}
              onChange={(e) => setStartDate(parseInt(e.target.value))}
            ></input>
            <label htmlFor="end-date">End Date :</label>
            <input
              id="end-date-container"
              type="number"
              name="end_date"
              value={endDate}
              onChange={(e) => setEndDate(parseInt(e.target.value))}
            ></input>
            <div className="next-to-each-other">
              <div>
                <input
                  id="isHighLight-container"
                  type="checkbox"
                  name="isHighLight"
                  value={isHighLight ? "true" : "false"}
                  onChange={(e) => setIsHighLight(e.target.checked)}
                ></input>
                <label htmlFor="isHighLight">HighLight</label>
              </div>
              <div>
                <input
                  id="artworkImage-container"
                  type="checkbox"
                  name="artworkImage"
                  value={artworkImage ? "true" : "false"}
                  onChange={(e) => setArtworkImage(e.target.checked)}
                ></input>
                <label htmlFor="artworkImage">Artwork With Image</label>
              </div>
              <div>
                <input
                  id="isOnView-container"
                  type="checkbox"
                  name="isOnView"
                  value={isOnView ? "true" : "false"}
                  onChange={(e) => setIsOnView(e.target.checked)}
                ></input>
                <label htmlFor="isOnView">Artworks on Display</label>
              </div>
              <div>
                <input
                  id="naziProvenance-container"
                  type="checkbox"
                  name="naziProvenance"
                  value={naziProvenance ? "true" : "false"}
                  onChange={(e) => setnaziProvenance(e.target.checked)}
                ></input>
                <label htmlFor="naziProvenance">Nazi-era provenance</label>
              </div>
            </div>
            <Link
              to={`/search?departmentId=${departmentId}&geoLocation=${geographic}&dateBegin=${startDate}&dateEnd=${endDate}&isHighlight=${isHighLight}&hasImages=${artworkImage}&isOnView=${isOnView}&artistOrCulture=${naziProvenance}&q=${object}`}
            >
              <button type="submit" disabled={!isFormValid}>
                Search
              </button>
            </Link>
          </form>
        )}
      </div>
    </>
  );
}

function ReturnIdDeparment({ department }: { department: string }) {
  const DepartmentIdQuery = useDepartmentIdSearchQuery(department);

  if (DepartmentIdQuery.isError) {
    return null;
  }

  const theart = DepartmentIdQuery.data?.departmentId;

  return theart;
}
