import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes, {
  basename: process.env.PUBLIC_URL,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
