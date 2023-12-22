import React from "react";
import Scaffold from "./Scaffold";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-scaffold",
};

describe("Scaffold Component", () => {
  performStandardTest(Scaffold, defaultProps, "eis-scaffold");
});
