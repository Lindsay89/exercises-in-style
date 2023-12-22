import { Scaffold } from "./components";
import { GalleryPage } from "./views/GalleryPage";
import { HomePage } from "./views/HomePage";

export const routes = [
  {
    path: "/",
    element: (
      <Scaffold>
        <HomePage />
      </Scaffold>
    ),
  },
  {
    path: "/Gallery",
    element: (
      <Scaffold>
        <GalleryPage />
      </Scaffold>
    ),
  },
];
