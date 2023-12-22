import React, { useState } from "react";
import { Scaffold } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { GalleryPage } from "./views/GalleryPage";
import { routes } from "./routes";

const router = createBrowserRouter(routes, { basename: "/eis" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
