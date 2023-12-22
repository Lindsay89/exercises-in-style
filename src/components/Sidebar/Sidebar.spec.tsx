import React from "react";
import Sidebar from "./Sidebar";
import performStandardTest from "../../utils/functions/performStandardTest";

const defaultProps = {
  "data-testid": "eis-sidebar",
};

describe("Sidebar Component", () => {
  performStandardTest(Sidebar, defaultProps, "eis-sidebar");
});
