import React from "react";
import BasicGallery from "./BasicGallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-basicGallery",
};

describe("BasicGallery Component", () => {
  performStandardTest(BasicGallery, defaultProps, "eis-basicGallery");
});
