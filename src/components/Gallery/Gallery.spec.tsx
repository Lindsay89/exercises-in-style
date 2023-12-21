import React from "react";
import Gallery from "./Gallery";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-gallery",
};

describe("Gallery Component", () => {
  performStandardTest(Gallery, defaultProps, "eis-gallery");
});
