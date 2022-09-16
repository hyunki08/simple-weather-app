import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/weather/:region",
    element: <Weather />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

