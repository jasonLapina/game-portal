import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import FilteredGames from "./pages/FilteredGames";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search/:query",
        element: <FilteredGames />,
      },
      {
        path: "category/:category",
        element: <FilteredGames />,
      },
      {
        path: "game/:gameId",
        element: <GameDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
