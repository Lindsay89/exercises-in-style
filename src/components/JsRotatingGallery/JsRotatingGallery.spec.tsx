import React from "react";
import JsRotatingGallery from "./JsRotatingGallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-jsRotatingGallery",
  images: [
    "https://picsum.photos/1024/600?random&category=nature",
    "https://picsum.photos/1024/600?random&category=sun",
  ],
};

describe("JsRotatingGallery Component", () => {
  performStandardTest(JsRotatingGallery, defaultProps, "eis-jsRotatingGallery");
});
