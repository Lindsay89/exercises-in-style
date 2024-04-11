import { Scaffold } from "./components";
import { PPTGalleryPage } from "./views/PPTGalleryPage";
import { RotatingGalleryPage } from "./views/RotatingGalleryPage";
import { HomePage } from "./views/HomePage";
import { JsRotatingGalleryPage } from "./views/JsRotatingGalleryPage ";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
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
  {
    path: "/JsRotatingGallery",
    element: (
      <Scaffold>
        <JsRotatingGalleryPage />
      </Scaffold>
    ),
  },
];
