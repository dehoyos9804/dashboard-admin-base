import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/global/Layout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard";
import Team from "../pages/info/team";
import Contacts from "../pages/info/contacts";
import Invoices from "../pages/info/invoices";
import Form from "../pages/apps/form";
import Calendar from "../pages/apps/calendar";
import Bar from "../pages/charts/bar";
import Pie from "../pages/charts/pie";
import Line from "../pages/charts/line";
import Geography from "../pages/charts/geography";
import Notification from "../pages/apps/notification";

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
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
    ],
  },
]);

export default router;
