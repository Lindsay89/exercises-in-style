import React from "react";
import HomePage from "./HomePage";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-homePage",
};

describe("HomePage Component", () => {
  performStandardTest(HomePage, defaultProps, "eis-homePage");
});
