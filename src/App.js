import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import FilteredGames from "./pages/FilteredGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <h1>THIS IS THE SEARCH PAGE</h1>,
      },
      {
        path: "/category/:category",
        element: <FilteredGames />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
