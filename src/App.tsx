import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ArtListPage } from "./page/ArtListPage";
import { ArtDetailPage } from "./page/ArtDetailPage";
import { Menu } from "./composants/Search";
import { DeepSearch } from "./composants/DeepSearch";
import { ArtSearchPage } from "./page/ArtRapidReseachPage";
import { ArtDeepSearchPage } from "./page/ArtDeepSearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <div>
        Page non trouvée
        <br />
        <a href="/">Retour à l'accueil</a>
      </div>
    ),
    element: (
      <div>
        <Menu />
        <DeepSearch />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ArtListPage />,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
      {
        path: "/art/:id",
        element: <ArtDetailPage />,
      },
      {
        path: "/search/:query",
        element: <ArtSearchPage />,
      },
      {
        path: "/search",
        element: <ArtDeepSearchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
