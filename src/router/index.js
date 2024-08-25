import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/global/Layout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Contacts from "../pages/contacts";
import Invoices from "../pages/invoices";
import Form from "../pages/form";
import Calendar from "../pages/calendar";

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
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
