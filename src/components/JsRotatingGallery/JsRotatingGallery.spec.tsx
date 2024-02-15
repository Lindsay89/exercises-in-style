import React from "react";
import JsRotatingGallery from "./JsRotatingGallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-jsRotatingGallery",
};

describe("JsRotatingGallery Component", () => {
  performStandardTest(JsRotatingGallery, defaultProps, "eis-jsRotatingGallery");
});
