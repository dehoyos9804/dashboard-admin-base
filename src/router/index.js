import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/global/Layout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
