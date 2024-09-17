import React from "react";
import "@fontsource/firago";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
