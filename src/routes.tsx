import { Scaffold } from "./components";
import { PPTGalleryPage } from "./views/PPTGalleryPage";
import { RotatingGalleryPage } from "./views/RotatingGalleryPage";
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
    path: "/PPTGallery",
    element: (
      <Scaffold>
        <PPTGalleryPage />
      </Scaffold>
    ),
  },
  {
    path: "/RotatingGallery",
    element: (
      <Scaffold>
        <RotatingGalleryPage />
      </Scaffold>
    ),
  },
];
