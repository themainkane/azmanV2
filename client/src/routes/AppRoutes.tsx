import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/pages/Home";
// import LoginRoutes from "./LoginRoutes";

const indexRoute = [
  {
    path: "/",
    element: <Home />,
  },
];

const allRoutes = [
  ...indexRoute,
  // ...loginRoutes
];

export default function AppRoutes() {
  return useRoutes(allRoutes);
}
