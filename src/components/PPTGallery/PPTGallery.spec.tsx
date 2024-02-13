import React from "react";
import PPTGallery from "./PPTGallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-gallery",
};

describe("Gallery Component", () => {
  performStandardTest(PPTGallery, defaultProps, "eis-gallery");
});
