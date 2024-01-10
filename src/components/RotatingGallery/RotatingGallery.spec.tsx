import React from "react";
import RotatingGallery from "./RotatingGallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-RotatingGallery",
};

describe("RotatingGallery Component", () => {
  performStandardTest(RotatingGallery, defaultProps, "eis-RotatingGallery");
});
