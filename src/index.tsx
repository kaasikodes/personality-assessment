import Layout from "components/layout";
import { appRoutes } from "data/routes";
import Assessment from "pages/assessment";
import ErrorPage from "pages/error";
import Home from "pages/home";
import Result from "pages/result";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: appRoutes.index,
    element: <Layout />, //this will be a layout component
    errorElement: <ErrorPage />,
    children: [
      {
        path: appRoutes.index,
        element: <Home />,
      },
      {
        path: appRoutes.start,
        element: <Assessment />,
      },
      {
        path: appRoutes.result,
        element: <Result />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
